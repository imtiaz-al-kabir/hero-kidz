import { getCart } from "../../actions/server/cart";

const CartPage = async () => {
  const cartItem = await getCart();
  return (
    <div>
      <h2>My Cart</h2>

      <p>{cartItem.length} items found</p>
    </div>
  );
};

export default CartPage;
