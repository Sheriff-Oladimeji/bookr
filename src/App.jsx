import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./Pages/home/Home";
import Rooms from "./Pages/rooms/Rooms";
import Contact from "./Pages/contact/Contact";
import RootLayout from "./layout/RootLayout";
import NotFound from "./Pages/404/NotFound";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="*" element={<NotFound/>} />
         </Route>
    )
  );
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
