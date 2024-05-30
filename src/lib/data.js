import { Post, User } from "./models";
import { connectToDb } from "./utils";

// Temporary data
const users = [
  { userId: 1, name: "Sabine Wren" },
  { userId: 2, name: "Shin Hati" },
];

const posts = [
  { id: 1, title: "Post Title 1", body: "Lorem ....", userId: 1 },
  { id: 2, title: "Post Title 2", body: "Lorem ....", userId: 1 },
  { id: 3, title: "Post Title 3", body: "Lorem ....", userId: 2 },
  { id: 4, title: "Post Title 4", body: "Lorem ....", userId: 2 },
];

export const getPosts = async () => {
  try {
    // await connectToDb()
    // const posts = await Post.find()
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    // await connectToDb()
    // const post = await Post.find({slug})

    const post = posts.find((post) => post.id === parseInt(slug));

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (userId) => {
  try {
    // await connectToDb()
    // const user = await User.findById(id)
    const parsedUserId = parseInt(userId);
    const user = users.find((user) => user.userId === parsedUserId);;

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
export const getUsers = async () => {
  try {
    // await connectToDb()
    // const users = await User.find()
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
