import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Explore />} path="/" />
          <Route element={<ForgotPassword />} path="/forgotpassword" />
          <Route element={<Offers />} path="/offers" />
          <Route element={<Category/>} path="/category/:categoryName"/>
          <Route path="/profile" element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route element={<SignIn />} path="/signin" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<CreateListing />} path="/create-listing" />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
