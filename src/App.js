import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPass from "./pages/CreateNewPass";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [workSpace, setWorkSpace] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [userData, setUserData] = useState([
    {
      userName: "test",
      email: "test@gmail.com",
      password: "Test.123",
      passwordConfirm: "",
    },
  ]);

  localStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="/forgotpassword"
            element={<ForgotPassword userData={userData} isLogin={isLogin} />}
          />
          <Route
            path="/home"
            element={
              isLogin ? (
                <Home
                  setIsLogin={setIsLogin}
                  isLogin={isLogin}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  userData={userData}
                  workSpace={workSpace}
                  setWorkSpace={setWorkSpace}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={<Register setUserData={setUserData} userData={userData} />}
          />
          <Route
            path="/createnewpass"
            element={
              <CreateNewPass setUserData={setUserData} userData={userData} />
            }
          />
          <Route
            path="/dashboard"
            element={
              isLogin ? (
                <Dashboard
                  userData={userData}
                  workSpace={workSpace}
                  setWorkSpace={setWorkSpace}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
