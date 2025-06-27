import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import View from "./components/View"
import { Toaster } from "react-hot-toast";

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
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
}

export default App;
