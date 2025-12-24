"use server";

import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "../../lib/authOptions";
import { collections, connectDB } from "../../lib/dbConnect";

const cartCollection = connectDB(collections.CART);

export const handleCart = async (productId) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  //   getcart item=> user.email,&& productId

  const query = { email: user?.email, productId};
  const isAdded = await cartCollection.findOne(query);
  if (isAdded) {
    const updatedData = {
      $inc: {
        quantity:1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
  } else {

    const product=await connectDB(collections.PRODUCTS).findOne({

      _id:new ObjectId(productId)
    })
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * (product.discount || 0)) / 100,
      username: user?.name,
    };
    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};
export const getCart = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return [];

  const query = { email: user?.email };

  const result = await cartCollection.find(query).toArray();
  return result.map((item) => ({
    ...item,
    _id: item._id.toString(),
    productId: item.productId.toString(),
  }));
});

export const deleteCart = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  if (id.length != 24) {
    return { success: false };
  }

  const query = { _id: new ObjectId(id),email:user?.email };

  const result = await cartCollection.deleteOne(query);
  // if (result.deletedCount) {
  //   revalidatePath("/cart");
  // }
  return { success: Boolean(result.deletedCount) };
};

export const increaseitemDB = async (id, quantity) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  if (quantity > 10) {
    return { success: false, message: "You can not buy 10 products at a time" };
  }
  const query = { _id: new ObjectId(id),email:user?.email };
  const updatedData = {
    $inc: {
      quantity: 1,
    },
  };

  const result = await cartCollection.updateOne(query, updatedData);

  return { success: Boolean(result.modifiedCount) };
};
export const decreaseitemDB = async (id, quantity) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  if (quantity <= 1) {
    return { success: false, message: "quantity cant be empty" };
  }
  const query = { _id: new ObjectId(id),email:user?.email };
  const updatedData = {
    $inc: {
      quantity: -1,
    },
  };

  const result = await cartCollection.updateOne(query, updatedData);

  return { success: Boolean(result.modifiedCount) };
};

export const clearCart = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = { email: user?.email };

  const result = await cartCollection.deleteMany(query);
  return result;
};
