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
  const [options, setOptions] = useState({
    adult: 1,
    children: 2,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleDateClick = (e) => {
    e.stopPropagation();
    setOpenDate(!openDate);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
    setOpenOptions(!openOptions);
  };

  return (
    <header className="header font-lato">
      <div className="flex flex-col justify-center items-center pt-32  w-[90%] mx-auto">
        <h1 className="text-3xl  sm:text-4xl md:text-5xl mx-auto text-center">
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
                className="absolute top-[20px] md:top-[80px] left-0 mx-auto z-10 rounded-lg md:left-10"
              />
            )}
          </div>
          <div className="box">
            <span
              onClick={handleOptionsClick}
              className="flex items-center gap-2 justify-center"
            >
              <GiPerson size={25} />
              {`${options.adult} adult • ${options.children} children • ${options.room} room `}
            </span>
            {openOptions && (
              <div
                className="absolute bg-[white] text-[gray] shadow-[0px_0px_10px_-15px_rgba(0,0,0,0.4)] rounded-[5px] top-[80px] "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room} </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="bg-brown p-4 font-bold font-lato text-xl rounded-lg w-full md:w-[20%]">
            Check Availability
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
