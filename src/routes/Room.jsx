import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { AiOutlineCalendar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart"

const Room = () => {
  
 
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  const [openDate, setOpenDate] = useState(false);
   const handleDateClick = (e) => {
     e.stopPropagation();
     setOpenDate(!openDate);
   };
  const { roomId } = useParams();
  
  const selectedRoom = rooms.find((room) => room.id === parseInt(roomId));
 const dispatch = useDispatch();

  if (!selectedRoom) {
    return <div>Item not found.</div>;
  }

  const { name, price, img, about, guests, children, bedSize, type , id} =
    selectedRoom;
    const handleAddToCart = () => {
      dispatch(addToCart({name, id, price, img}));
      alert("Item added to cart")
    };

  return (
    <div className="mb-20 font-mont">
      <div className="w-[90%] md:w-[80%] mx-auto  mt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 w-full">{name}</h1>

        <div className="flex flex-col md:flex-row gap-10  ">
          <div className="w-full md:w-[70%]">
            <img
              src={img}
              alt={name}
              className="w-full max-h-[400px]  mb-6 object-cover rounded-lg"
            />
            <div>
              {about.map((info, index) => (
                <p key={index} className="text-gray-500 mb-2 ">
                  {info}
                </p>
              ))}
            </div>
            <h1 className="text-2xl py-4">Room Details</h1>
            <div className="flex flex-col space-y-4 ">
              <div className="table">
                <p>Guests:</p>
                <p className="font-bold">{guests}</p>
              </div>
              {children !== false && (
                <div className="table">
                  <p>Children:</p>
                  <p className="font-bold">{children}</p>
                </div>
              )}
              <div className="table">
                <p>Bed Size(S):</p>
                <p className="font-bold">{bedSize}</p>
              </div>
              <div className="table">
                <p>Room Type</p>
                <p className="font-bold">{type}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#18191B] h-[350px]  w-full md:w-[35%] max-w-[500px] text-center relative py-8">
            <div className=" w-[80%] mx-auto  bg-white py-4 h-[60px] relative rounded-md">
              <span
                className="flex flex-row-reverse items-center gap-2 w-[90%] mx-auto"
                onClick={handleDateClick}
              >
                <AiOutlineCalendar size={25} />
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute  left-0 "
                />
              )}
            </div>
            <div className="flex justify-center items-center outline outline-white w-[80%] mx-auto outline-1 h-16 mt-10">
              <h2 className="text-3xl text-white font-bold">
                ${price}
                <span className="text-lg uppercase font-normal font-lato">
                  / per night
                </span>
              </h2>
            </div>
            
              <button className="border-2 border-brown p-4 w-[80%] rounded-lg  mt-8 bg-brown font-semibold text-white text-center" onClick={handleAddToCart}>
                Add to cart
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
