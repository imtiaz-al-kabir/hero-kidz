import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authOptions";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

export const metadata = {
  title: "Home | Hero Kidz",
  description:
    "Welcome to Hero Kidz, your one-stop destination for premium kids' products. Explore our latest collection today!",
};

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <p>{JSON.stringify(session)}</p>
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
