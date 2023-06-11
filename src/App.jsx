import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/home/Home";

import Contact from "./Pages/contact/Contact";
import RootLayout from "./layout/RootLayout";
import NotFound from "./Pages/404/NotFound";
import Gallery from "./Pages/gallery/Gallery";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
