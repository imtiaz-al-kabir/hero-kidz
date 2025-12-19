import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
export const collections = {
  PRODUCTS: "products",
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDB = (cName) => {
  return client.db(dbname).collection(cName);
};
