import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/home/Home";
import Contact from "./Pages/contact/Contact";
import NotFound from "./Pages/404/NotFound";
import Gallery from "./Pages/gallery/Gallery";
import Navbar from "./components/nav/Navbar";
import Room from "./routes/Room";
import Footer from "./components/footer/Footer";
import Cart from "./Pages/cart/Cart";
import { useEffect } from "react";
import Rooms from "./Pages/rooms/Rooms";


function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}

const App = () => {
  return (
    <Router>
     
      <section className="flex flex-col justify-between min-h-screen">
<ScrollToTopOnRouteChange/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
};

export default App;
