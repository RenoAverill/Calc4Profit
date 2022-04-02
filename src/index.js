import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/navBar";
import addUsersCall from "./Backend/Services/userService";
export function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));