import { getCart } from "../../actions/server/cart";
import Cart from "../../components/home/Cart";

const CartPage = async () => {
  const cartItem = await getCart();
  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-primary">My Cart</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <Cart cartItem={cartItem} />
      </div>
    </div>
  );
};

export default CartPage;
