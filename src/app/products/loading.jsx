import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {[...Array(8)].map((_, ind) => (
        <ProductCardSkeleton key={ind} />
      ))}
    </div>
  );
};

export default loading;
