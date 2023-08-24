
import About from "../../components/about/About"
import Facilities from "../../components/facilities/Facilities"
import Header from "../../components/header/Header"
import BestRooms from "../../components/rooms/BestRooms"




const Home = () => {
  return (
    <section >
      <Header />
      <About />
      <BestRooms/>
      <Facilities />
    </section>
  );
}

export default Home