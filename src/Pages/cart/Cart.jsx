import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="mt-12 w-[90%] md:w-[80%] mx-auto font-mont">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <div className="py-8 mt-8 text-4xl flex flex-col justify-center gap-8 items-center">
          <p className=" text-4xl  ">Your cart is empty.</p>
          <Link
            to="/rooms"
            className="border-2 border-brown p-4  rounded-lg  mt-8 bg-brown  text-white text-center mb-4  font-lato  "
          >
            Book a Room
          </Link>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mt-12 items-center border-b pb-2"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[100px] h-[50px] object-cover rounded-md"
                  />
                  <h2 className="font-bold">{item.name}</h2>
                </div>
                <div className="flex gap-4 items-center ">
                  <p>${item.price}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <AiOutlineDelete size={25} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex gap-4 items-center mt-4">
              <p className="font-bold">Total price =</p>
              <p>${totalPrice}</p>
            </div>
          </div>
          <div className="bg-[#18191B] h-[350px]  w-full md:w-[35%] max-w-[500px] text-center relative py-8 rounded-md">
            <button
              className="border-2 border-brown p-4 w-[80%] rounded-lg  mt-8 bg-brown font-semibold text-white text-center"
              
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
