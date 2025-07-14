import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import View from "./components/View"
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import lightbg from "../src/assets/bgtexture.jpg"
import darkbg from "../src/assets/dark_texture.jpg"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="navbar_section">
        <Navbar />
        <Home className="req_page" />
      </div>
    ),
  },
  {
    path: "/pastes_list",
    element: (
      <div className="navbar_section">
        <Navbar />
        <Pastes className="req_page" />
      </div>
    ),
  },
  {
    path: "/view",
    element: (
      <div className="navbar_section">
        <Navbar />
        <View className="req_page" />
      </div>
    ),
  },
]);
function App() {
  const theme  = useSelector((state)=>state.notii.theme)
  console.log("theme value = ",theme)
  const bgImage = theme === "dark" ? darkbg : lightbg;

  return (
   <div
   className="transition-all m-0  appcontainer duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
 
    <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
}

export default App;
