import React from 'react'
// import css from '../css/Home.css'
import Navbar from '../components/Navbar'
// import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
// import Login from '../components/Login'
import Copyright from '../components/Copyright'
import Login from '../pages/Login'
export default function Home({ isLogin, setIsLogin, loading, setLoading }) {
  // const navigate = useNavigate()
  return (
    <>
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setLoading={setLoading}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="main">
          <img
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
            alt=""
          />

          <Login />
        </div>
      )}
      <Copyright className="footer" />
    </>
  )
}
