
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import RegisterFull from './pages/RegisterFull';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [userData, setUserData] = useState([
    {
      userName: 'test',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  ])
  localStorage.setItem('userData', JSON.stringify(userData))


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLogin={isLogin} setIsLogin={setIsLogin} setIsLoading={setIsLoading} isLoading={isLoading} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/login' element={<Login setIsLogin={setIsLogin} setIsLoading={setIsLoading} />} />
          <Route path='/register' element={<Register setUserData={setUserData} userData={userData} />} />
          <Route path='/registerfull' element={<RegisterFull setUserData={setUserData} userData={userData} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
