import "react";
import Navbar from "./components/ui/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from 'lucide-react'
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Footer from "./components/ui/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ), // Ensure Hero is only used here
  },
  {
    path: "/courses",
    element: (
      <>
        <Navbar />
        <Courses />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
