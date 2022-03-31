import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/navBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignUp/>} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));