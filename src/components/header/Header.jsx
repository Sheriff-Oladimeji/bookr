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
  const [openOptions, setOPenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <header className="header font-lato">
      <div className="flex flex-col justify-center items-center pt-32  w-[90%] mx-auto">
        <h1 className="text-3xl  sm:text-4xl md:text-5xl mx-auto text-center">
          Welcome To The Place Where Luxury Meets Affordability
        </h1>
        <div className="grid md:grid-cols-4 gap-6 w-full mt-20">
          <div className="box">
            <span
              className="flex items-center gap-2 justify-center"
              onClick={() => setOpenDate(!openDate)}
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
            <span >
              <GiPerson size={25} />
            </span>
          </div>
          <div className="box">
            <span>today-tommorrow</span>
          </div>
          <button>Check Availability</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
