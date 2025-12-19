import { getProducts } from "../../actions/server/product";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  const products = (await getProducts()) || [];
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-10">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
