import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  selectCartData,
} from "../slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector(selectCartData);
  const calculateTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl py-6">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4 shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <div className="mt-2 flex justify-between items-center">
              <div>
                <button
                  onClick={() => {
                    const newQuantity = item.quantity - 1;
                    if (newQuantity >= 1) {
                      dispatch(
                        updateQuantity({ id: item.id, quantity: newQuantity })
                      );
                    }
                  }}
                  disabled={item.quantity === 1}
                  className="bg-blue-500 text-white rounded-lg px-3 py-1"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                  className="bg-blue-500 text-white rounded-lg px-3 py-1"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold">
          Total Price: ${calculateTotalPrice()}
        </p>
      </div>
    </div>
  );
}

export default Cart;
