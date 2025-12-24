import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
   
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Your Cart</h1>

     {cartItems.length > 0 && (
  <div className="flex sm:justify-end justify-start mb-4">
    <button
      className="sm:w-auto px-4 py-2 mr-7 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition-colors"
      onClick={handleClearCart}
    >
      Clear Cart
    </button>
  </div>
)}

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          Your cart is empty. Start adding items!
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              showAddButton={false}
              showQuantityControls={true}
            />
          ))}

          {/* Cart Total */}
         <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-6 font-semibold text-xl">
  <span>Total:</span>
  <span>₹{cartTotal}</span>
</div>

<div className="flex sm:justify-end justify-center mt-4 mb-6">
  <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition-colors">
    Proceed to Checkout
  </button>
</div>

        </div>
      )}
    </div>
  );
};

export default Cart;
