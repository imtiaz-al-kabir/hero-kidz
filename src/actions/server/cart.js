"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { collections, connectDB } from "../../lib/dbConnect";

const cartCollection = connectDB(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  //   getcart item=> user.email,&& productId

  const query = { email: user?.email, productId: product?._id };
  const isAdded = await cartCollection.findOne(query);
  if (isAdded) {
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
  } else {
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * product.discount) / 100,
      username: user.name,
    };
    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};
export const getCart = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return [];

  const query = { email: user?.email };

  const result = await cartCollection.find(query).toArray();
  return result;
};
