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
      <div className="mainpage">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes_list",
    element: (
      <div className="mainpage">
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/view",
    element: (
      <div className="mainpage">
        <Navbar />
        <View />
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
