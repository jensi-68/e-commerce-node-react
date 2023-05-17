import './App.css';
import Homepage from './components/home/Homepage';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/home/About';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import Logout from './components/Form/Logout';
import UserLandingPage from './components/UserDashboard/UserLandingPage';
import AddProduct from './components/Products/AddProduct';
import ViewProducts from './components/Products/ViewProducts';
import ViewSingle from './components/Products/ViewSingle';
import UpdateProduct from './components/Products/UpdateProduct';

function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <>
   <Routes>

   { user &&  <Route path='/' element={<Homepage/>} />}
   {/* <Route path='/' exact element={<UserLandingPage/>}/> */}
   <Route path='/UserLandingPage' exact element={<UserLandingPage/>}/>
    <Route path='/Login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/Login' element={<Navigate replace to="/Login" />} />
    <Route path='/AddProduct' element={<AddProduct/>}/>
    <Route path='/UpdateProduct' element={<UpdateProduct/>}/>
    <Route path='/ViewProducts' element={<ViewProducts/>}/>
    <Route path='/ViewSingle/:id' element={<ViewSingle/>}/>
    <Route path='/Logout' element={<Logout/>}/>
   </Routes>
    </>
  );
}

export default App;
