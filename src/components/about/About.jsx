

const About = () => {
  return (
    <div className=" w-[90%]  gap-10 md:gap-20 mx-auto flex flex-col md:flex-row  pt-16 items-center font-mont">
      <div className="w-full flex-1 bg-white ">
        <div className=" flex flex-col gap-8 h-full  md:py-0 justify-center">
          <h2 className="text-2xl font-bold font-lato">ABOUT US</h2>

          <p>
            Welcome to Bookr, your ultimate destination for seamless hotel room
            bookings and unforgettable travel experiences. At Bookr, we
            understand that your journey is not just a trip but a collection of
            cherished memories waiting to be crafted.
          </p>
          <p>
            Our passion for hospitality drives us to redefine the way you
            discover and reserve accommodations, ensuring that every stay is
            marked by comfort, convenience, and delight. Whether you're a
            business traveler seeking a productive environment, a leisure
            explorer yearning for relaxation, or a family searching for bonding
            moments, Bookr has a room perfectly tailored to your needs.
          </p>
        </div>
      </div>

      <img
        src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="w-full flex-1 object-cover h-full rounded-xl"
      />
    </div>
  );
}

export default About