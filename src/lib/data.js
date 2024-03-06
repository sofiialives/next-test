import { connect } from "./connect";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connect();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get all posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connect();
    const posts = await Post.findOne({ slug });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get unique post!");
  }
};

export const getUsers = async () => {
  try {
    connect();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get all users!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connect();
    const users = await User.findById(id);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get unique user!");
  }
};
