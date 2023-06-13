
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
