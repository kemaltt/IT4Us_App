import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link, useNavigate } from "react-router-dom";
// import { MdLogout } from 'react-icons/md'

export default function NavMobile({ setIsLogin, isLogin, setLoading }) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // const handleLogOut = () => {
  //   // localStorage.clear()
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  //   setLoading(true)
  //   setToggle(!toggle)
  //   navigate('/login')
  //   setIsLogin(false)
  // }
  return (
    <>
      <div className="nav-mobile">
        <div onClick={() => navigate("/")} className="logo">
          {/* <img src="trello.png" alt="logo" /> */}
          <h4>IT4US</h4>
          <h2>TODO</h2>
        </div>

        {!toggle ? (
          <MenuIcon
            style={{ color: "white", fontSize: "2.5rem" }}
            onClick={handleToggle}
            className="nav-menü"
          />
        ) : (
          //   <ImCross onClick={handleToggle} className="nav_menü" />
          <MenuOpenIcon
            style={{ color: "white", fontSize: "2.5rem" }}
            onClick={handleToggle}
            className="nav-menü"
          />
        )}
      </div>
      {toggle ? (
        <div className="nav-toggle-items">
          <ul>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
          {/* <div className="nav_items_auth">
            {isLogin ? (
              <Link onClick={handleLogOut}>
                Log out <MdLogout style={{ fontSize: '1.5rem' }} />{' '}
              </Link>
            ) : (
              <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Get Trello for free</Link>
              </>
            )}
          </div> */}
        </div>
      ) : null}
    </>
  );
}
