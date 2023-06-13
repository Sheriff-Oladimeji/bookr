
import { useSelector} from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-12 w-[90%] md:w-[80%] mx-auto">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p className="py-8 text-3xl">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mt-12 items-center border-b"
            >
              <div className="flex items-center gap-6">
                <img src={item.img} alt={item.name} className="w-[10%]" />
                <h2>{item.name}</h2>
              </div>
              <p>{item.price}</p>
              <button>Remove</button>
            </div>
          ))}
            <div className="flex gap-4 items-center">
              <p className="font-bold">Total price =</p>
              <p>{totalPrice}</p>
            </div>
          <div className="w-[60%] md:w-[30%] mx-auto">
            <button className="border-2 border-brown p-4  rounded-lg  mt-8 bg-brown font-semibold text-white text-center mb-4 w-full">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
