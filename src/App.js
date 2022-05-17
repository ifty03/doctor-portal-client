import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import AllAppointment from "./Pages/Dashbord/AllAppointment";
import AppointmentHistory from "./Pages/Dashbord/AppointmentHistory";
import DashBord from "./Pages/Dashbord/DashBord";
import MyAppointment from "./Pages/Dashbord/MyAppointment";
import Users from "./Pages/Dashbord/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequirAdmin from "./Pages/RequireAdmin";
import RequireAuth from "./Pages/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBord />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route
            index
            path="appointmentHistory"
            element={<AppointmentHistory />}
          ></Route>

          <Route
            index
            path="allAppointment"
            element={<AllAppointment />}
          ></Route>
          <Route
            index
            path="users"
            element={
              <RequirAdmin>
                <Users />
              </RequirAdmin>
            }
          ></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
