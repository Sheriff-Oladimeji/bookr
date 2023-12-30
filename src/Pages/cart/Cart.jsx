import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const formattedPrice = totalPrice.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
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
            className="border-2 border-brown p-2  rounded-lg  mt-4 bg-brown text-lg  text-white text-center mb-4  font-lato  "
          >
            Book a Room
          </Link>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row  justify-between gap-12 py-8">
          <div className="w-full md:w-[70%]">
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
          </div>
          <div className="bg-[#18191B]  w-full md:w-[35%] max-w-[500px] text-center relative py-8 rounded-md flex flex-col   gap-4 text-white">
            <h3 className="font-semibold text-xl text-white">Cart Summary</h3>

            <div className="w-[90%] mx-auto text-gray-200">
              <p className="flex justify-between items-center">
                No of rooms <span className="font-bold text-white">{cartItems.length}</span>
              </p>
              <p className="flex justify-between items-center ">
                Total price
                <span className="font-bold  text-white">{formattedPrice}</span>
              </p>
            </div>
            <button className="border-2 border-brown p-2 w-[90%] rounded-lg   bg-brown font-semibold mx-auto text-white text-center">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
