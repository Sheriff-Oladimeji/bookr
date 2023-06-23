import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [guests, setGuests] = useState({
    adult: 1,
    children: 2,
    room: 1,
  });
  const [openGuests, setOpenGuests] = useState(false);

  const handleGuest = (name, operation) => {
    setGuests((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? guests[name] + 1 : guests[name] - 1,
      };
    });
  };

  const handleDateClick = (e) => {
    e.stopPropagation();
    setOpenDate(!openDate);
  };

  const handleGuestsClick = (e) => {
    e.stopPropagation();
    setOpenGuests(!openGuests);
  };

  return (
    <header className="header font-lato">
      <div className="flex flex-col justify-center items-center pt-32  w-[90%] mx-auto">
        <h1 className="text-3xl  sm:text-4xl md:text-5xl mx-auto text-center mt-12 font-mont">
          Welcome To The Place Where Luxury Meets Affordability
        </h1>
        <div className="h-[100px] flex flex-col gap-6 md:flex-row items-center justify-around  mt-[100px] w-full  px-0 py-4 rounded-[5px] relative">
          <div className="box w-[%] md:w-[30%]">
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
                className="absolute top-[20px] md:top-[80px] left-0 mx-auto z-10 rounded-lg md:left-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "
              />
            )}
          </div>
          <div className="box">
            <span
              onClick={handleGuestsClick}
              className="flex items-center gap-2 justify-center"
            >
              <GiPerson size={25} />
              {`${guests.adult} adult - ${guests.children} children - ${guests.room} room `}
            </span>
            {openGuests && (
              <div
                className="absolute bg-[white] text-[gray] shadow-[0px_0px_10px_-15px_rgba(0,0,0,0.4)] rounded-[5px] top-[80px] "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="guestItem">
                  <span className="guestText">Adult</span>
                  <div className="guestCounter">
                    <button
                      disabled={guests.adult <= 1}
                      className="guestCounterButton"
                      onClick={() => handleGuest("adult", "d")}
                    >
                      -
                    </button>
                    <span className="guestCounterNumber">{guests.adult}</span>
                    <button
                      className="guestCounterButton"
                      onClick={() => handleGuest("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="guestItem">
                  <span className="guestText">Children</span>
                  <div className="guestCounter">
                    <button
                      disabled={guests.children <= 1}
                      className="guestCounterButton"
                      onClick={() => handleGuest("children", "d")}
                    >
                      -
                    </button>
                    <span className="guestCounterNumber">
                      {guests.children}
                    </span>
                    <button
                      className="guestCounterButton"
                      onClick={() => handleGuest("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="guestItem">
                  <span className="guestText">Room</span>
                  <div className="guestCounter">
                    <button
                      disabled={guests.room <= 1}
                      className="guestCounterButton"
                      onClick={() => handleGuest("room", "d")}
                    >
                      -
                    </button>
                    <span className="guestCounterNumber">{guests.room} </span>
                    <button
                      className="guestCounterButton"
                      onClick={() => handleGuest("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="bg-brown p-4 font-bold font-lato text-xl rounded-lg w-full md:w-[20%]">
            <a className="text-white" href="#rooms">
              Check Availability
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
