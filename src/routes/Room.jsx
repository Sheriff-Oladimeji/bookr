import { AiOutlineCalendar } from "react-icons/ai";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { useState } from "react";
const Room = () => {
  const { roomId } = useParams();
   const [openDate, setOpenDate] = useState(false);
  const selectedRoom = rooms.find((room) => room.id === parseInt(roomId));
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  if (!selectedRoom) {
    return <div>Item not found.</div>;
  }
const handleDateClick = (e) => {
  e.stopPropagation();
  setOpenDate(!openDate);
};
  const { name, price, img, about, guests, children, bedSize, type } =
    selectedRoom;

  return (
    <div className="mb-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div>
          <img src={img} alt={name} />
          <div>
            {about.map((info, index) => (
              <p
                key={index}
                className="text-gray-500 mb-2 flex flex-col md:flex-row"
              >
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
        <div>
          <div className="w-[50%] md:w-[30%]">
            <span
              className="flex items-center gap-2 justify-center"
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
                className="absolute top-[20px] md:top-[80px] left-0 mx-auto z-10 rounded-lg md:left-10"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
