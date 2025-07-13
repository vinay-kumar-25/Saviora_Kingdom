import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import View from "./components/View"
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { notiislice } from "./js/slices";


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
  return (
<div className={theme === "dark" ? "bg-black" : "bg-white"}>
 
    <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
}

export default App;
