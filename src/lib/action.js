"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
  "use server";
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
 
  const { _id } = Object.fromEntries(formData);
  try {
    await connectToDb();

    await Post.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deleteUser = async (formData) => {
  const { _id } = Object.fromEntries(formData);
  try {
    await connectToDb();
    await Post.deleteMany({ userId: _id });
    await User.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async (e) => {
  "use server";
  await signIn("github");
};
export const handleLogout = async (e) => {
  "use server";
  await signOut();
};

export const handleRegister = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match!" };
  }
  try {
    await connectToDb();
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
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password, redirect: false });

    return { success: true };
  } catch (error) {
    console.log(error);
    if (error.message === "CredentialsSignin") {
      return { error: "Invalid username or password" };
    }
    return { error: "Something went wrong" };
  }
};
