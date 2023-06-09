

const Navbar = () => {
    return (
      <nav className="w-full bg-[#FAFAFA] ">
        <div className="flex justify-between items-center py-4 w-[80%] mx-auto">
          <div>
            <span>HolidayHaven</span>
          </div>
                <ul className="flex space-x-6 text-brown font-semibold">
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Contact</li>
                    <li>Services</li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar