import { BsPeople } from "react-icons/bs";
import rooms from "../../data/rooms.json";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <main className="mb-20 mt-36 font-mont" id="rooms">
      <div className="text-center">
        <h1 className="text-4xl text-dark md:text-6xl text-center mb-6 cursive">
          Our Rooms
        </h1>
      </div>

      <div className="w-[90%]  mx-auto grid md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="py-8 flex flex-col justify-center items-center w-full mx-auto space-y-4">
              <h2 className="text-2xl md:text-xl font-bold text-dark">
                {room.name}
              </h2>
              <span className="flex text-lg items-center gap-3 text-gray-600">
                <BsPeople />
                {room.guests} Guests
              </span>
              <Link
                to={`/room/${room.id}`}
                className="border border-brown p-2 w-[60%] md:w-[80%] rounded-lg hover:bg-brown text-brown font-semibold hover:text-white text-center"
              >
                Book now ${room.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Rooms;
