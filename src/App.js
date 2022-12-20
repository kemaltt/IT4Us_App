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
import { UserContextProvider } from "./contexts/UserContext.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // localStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route
              path="/"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/home" element={isLogin ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createnewpass" element={<CreateNewPass />} />
            <Route
              path="/dashboard"
              element={
                isLogin ? (
                  <Dashboard isLogin={isLogin} setIsLogin={setIsLogin} />
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
