import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import NavbarComponentLogged from "./components/Navbar/NavbarLogged";
import Login from "./components/pages/LoginPage/Login";
import Register from "./components/pages/RegisterPage/Register";
import MainPage from "./components/pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "./config";

function App() {
  const [logged, setLogged] = useState(false);

  const isLogged = () => {
    if (localStorage.getItem("token") === null && logged !== false) {
      setLogged(false);
    } else {
      const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
      try {
        axios({
          method: "POST",
          url: `${backendUrl}/check`,
          headers: {
            Authorization: token,
          },
        }).then((res) => {
          console.log(res.data);
          setLogged(true);
        });
      } catch (err) {
        console.log(err);
        setLogged(false);
      }
    }
  };

  console.log(logged);

  useEffect(() => {
    isLogged();
  }, []);
  return (
    <>
      <div className="App">
        {logged ? (
          <Router>
            <NavbarComponentLogged />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </Router>
        ) : (
          <Router>
            <NavbarComponent />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
