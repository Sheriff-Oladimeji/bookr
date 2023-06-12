

import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";

const Room = () => {
  const { roomId } = useParams();
  
  const selectedRoom = rooms.find((room) => room.id === parseInt(roomId));

  if (!selectedRoom) {
    return <div>Item not found.</div>;
  }

  const { name, price, img, about, guests, children, bedSize, type } =
    selectedRoom;

  return (
    <div className="mb-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 mt-6 pt-32">
        <div className="">
          <img
            src={img}
            alt={name}
            className="w-full max-h-[400px]  mb-6 object-cover"
          />
          <div>
            {about.map((info, index) => (
              <p key={index} className="text-gray-500 mb-2 ">
                {info}
              </p>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
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
        <div className="bg-[#18191B] h-[350px] w-[100%]  text-white max-w-[500px] text-center">
          <h2>{price}/ per night</h2>
        </div>
      </div>
    </div>
  );
};

export default Room;
