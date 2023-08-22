import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Explore/>} path="/explore" />
        <Route element={<ForgotPassword/>} path="/forgotpassword" />
        <Route element={<Offers/>} path="/offers" />
        <Route element={<Profile/>} path="/profile" />
        <Route element={<SignIn/>} path="/signin" />
        <Route element={<SignUp/>} path="/signup" />
      </Routes>
      <Navbar/>
    </Router>
  );
}

export default App;
