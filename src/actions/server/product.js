"use server";
import { collections, connectDB } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await connectDB(collections.PRODUCTS).find().toArray();
  // Serialization Fix: Convert _id to string and ensure plain object
  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }

  const query = { _id: new ObjectId(id) };
  const product = await connectDB(collections.PRODUCTS).findOne(query);

  if (!product) return {};

  return { ...product, _id: product._id.toString() };
};
