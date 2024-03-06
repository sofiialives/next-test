"use server";
import { revalidatePath } from "next/cache";
import { connect } from "./connect";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (previousState, formData) => {
  const { title, slug, descr, userId } = Object.fromEntries(formData);
  try {
    connect();
    const newPost = new Post({ title, slug, descr, userId });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connect();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Deleted from db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connect();
    const user = await User.findOne({ email });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPost = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newPost.save();
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connect();
    await Post.deleteMany({ _id: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    console.log("Deleted from db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connect();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
