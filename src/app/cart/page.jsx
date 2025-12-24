import { getCart } from "../../actions/server/cart";
import Cart from "../../components/home/Cart";

const CartPage = async () => {
  const cartItem = await getCart();
  return (
    <div>
      <div>
        <h2>My Cart</h2>
      </div>

      <Cart cartItem={cartItem} />
    </div>
  );
};

export default CartPage;
