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
          <div className="box w-[350px] left-0">
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
                className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
              />
            )}
          </div>
          <div className="box">
            <span onClick={handleOptionsClick}>
              {`${options.adult} adult • ${options.children} children • ${options.room} room `}
              <GiPerson size={25} />
            </span>
            {openOptions && (
              <div className="options" onClick={(e) => e.stopPropagation()}>
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
         
          <button>Check Availability</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
