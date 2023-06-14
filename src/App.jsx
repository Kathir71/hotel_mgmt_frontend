import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useContext } from 'react';

import Home from './pages/Home.jsx';
import ChooseSignup from './pages/ChooseSignup';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Search from './pages/Search';
import { AuthProvider } from './contexts/AuthContext';
import HRegister from './pages/HRegister';
import HDetails from './pages/HDetails';
const App = () => {
  return (
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  )

}

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/chooseSignup" element = {<ChooseSignup />} />
        <Route path = "/signup" element = {<SignUp/>} />
        <Route path = "/hregister" element = {<HRegister/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/search" element={<Search/>} />
        <Route path = "/hdetails" element= {<HDetails/>} />
      </Routes>
    </Router>
  )
}

export default App;
