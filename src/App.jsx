import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Rooms from "./Pages/rooms/Rooms";
import Contact from "./Pages/contact/Contact";
import RootLayout from "./layout/RootLayout";
import NotFound from "./Pages/404/NotFound";

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;
