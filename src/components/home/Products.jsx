import { getProducts } from "../../actions/server/product";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  const products = (await getProducts()) || [];
  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral">
          Featured <span className="text-primary">Products</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
