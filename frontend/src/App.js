import './App.css';
import Navbar from "./Component/Navbar";
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import UserLayout from './Pages/UserLayout';
import AddUser from "./Users/AddUser";

function App() {
  return (
    <>
       <Router>
         <Routes>
         <Route path="/" element={<UserLayout/>} >
         <Route path="/" element={<Home/>} />
         <Route path="/addnewuser" element={<AddUser/>} />
         </Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;
