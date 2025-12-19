"use server";
import { collections, connectDB } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await connectDB(collections.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }

  const query = { _id: new ObjectId(id) };
  const products = await connectDB(collections.PRODUCTS).findOne(query);

  return products || {};
};
