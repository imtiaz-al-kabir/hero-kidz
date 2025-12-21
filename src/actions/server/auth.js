"use server";

import bcrypt from "bcryptjs";
import { collections, connectDB } from "../../lib/dbConnect";
export const postUser = async (payload) => {
  const { email, password, name } = payload;
  // check payload

  if (!email || !password) return null;

  // check user

  const isExist = await connectDB(collections.USERS).findOne({email});
  if (isExist) return null;

  // create user

  const newuser = {
    provider: "credentials",
    email,
    password: await bcrypt.hash(password, 10),
    name,
    role: "user",
  };

  // insert user

  const result = await connectDB(collections.USERS).insertOne(newuser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
