import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserLayout from './Pages/UserLayout';
import AddUser from "./Users/AddUser";
import EditUser from './Users/EditUser';

function App() {
  return (
    <>
       <Router>
            <Routes>
                <Route path="/" element={<UserLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/addnewuser" element={<AddUser/>} />
                <Route path="/usersdetails/:id" element={<EditUser/>} />
            </Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;
