

const Navbar = () => {
    return (
      <nav className="w-full bg-[#FAFAFA] font-lato">
        <div className="flex justify-between items-center py-4 w-[80%] mx-auto">
          <div>
            <span className="font-bold text-dark text-2xl font-mont">HolidayHaven</span>
          </div>
                <ul className="flex space-x-8 text-brown font-semibold items-center">
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