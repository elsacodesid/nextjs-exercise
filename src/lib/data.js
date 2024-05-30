import { Post, User } from "./models";
import { connectToDb } from "./utils";
import mongoose from "mongoose";

// Temporary data
// const users = [
//   { userId: 1, name: "Sabine Wren" },
//   { userId: 2, name: "Shin Hati" },
// ];

// const posts = [
//   { id: 1, title: "Post Title 1", body: "Lorem ....", userId: 1 },
//   { id: 2, title: "Post Title 2", body: "Lorem ....", userId: 1 },
//   { id: 3, title: "Post Title 3", body: "Lorem ....", userId: 2 },
//   { id: 4, title: "Post Title 4", body: "Lorem ....", userId: 2 },
// ];

// With mongodb, "body" is "desc", "name" is "username". Use accordingly. //

export const getPosts = async () => {
  try {
    await connectToDb()
    const posts = await Post.find()
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb()
    const post = await Post.findOne({slug})

    // const post = posts.find((post) => post.id === parseInt(slug));

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (_id) => {
  try {
    await connectToDb()

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error("Invalid user ID format");
    }

    const user = await User.findById(_id)
    const username = user ? user.username : null; 

    // const parsedUserId = parseInt(userId);
    // const user = users.find((user) => user.userId === parsedUserId);;

    return username;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
export const getUsers = async () => {
  try {
    await connectToDb()
    const users = await User.find()
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
