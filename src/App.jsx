import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Pages/home/Home";
import Rooms from "./Pages/rooms/Rooms";
import Contact from "./Pages/contact/Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
