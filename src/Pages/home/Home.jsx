
import About from "../../components/about/About"
import Facilities from "../../components/facilities/Facilities"
import Header from "../../components/header/Header"
import BestRooms from "../../components/rooms/BestRooms"
import Testimonials from "../../components/testimonials/Testimonials"




const Home = () => {
  return (
    <section >
      <Header />
      <About />
      <BestRooms/>
      <Facilities />
      <Testimonials/>
    </section>
  );
}

export default Home