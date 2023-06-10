import { Outlet } from "react-router-dom"
import Navbar from "../components/nav/Navbar"


const RootLayout = () => {
  return (
      <div>
          <Navbar />
          <main>
              <Outlet/>
          </main>
    </div>
  )
}

export default RootLayout