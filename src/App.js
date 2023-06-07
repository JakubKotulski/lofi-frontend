import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Login from "./components/pages/LoginPage/Login";
import Register from "./components/pages/RegisterPage/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
