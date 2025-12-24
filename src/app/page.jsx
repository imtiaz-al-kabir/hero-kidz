import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Features from "../components/home/Features";
import Newsletter from "../components/home/Newsletter";
import Products from "../components/home/Products";

export const metadata = {
  title: "Home | Kidz Zone",
  description:
    "Welcome to Kidz Zone, your one-stop destination for premium kids' products. Explore our latest collection today!",
};

const Home = async () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Features />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
