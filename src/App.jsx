import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import {  Navigate } from 'react-router-dom';
import Login from './auth/login/login'
import Register from './auth/register/register'
import Home from './auth/home/home'
import Crud from './auth/firestore-crud/crud'
import CrudReal from './auth/real-db/CrudReal'
import { auth } from './firebase';
import Resetpswd from './auth/login/passwordRest'
import LoginPhone from './auth/login/loginPhone'
import UploadImg from './auth/updatedata/uploadImg'



function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log('user :>> ', user);
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }
  , []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />}  />
        <Route path='/login' element={user ? <Home /> : <Login />}  />
        <Route path='/register' element={ <Register />}/>
        <Route path='/home' element={user ? <Home /> : <Navigate to="/" />}/>
        <Route path='/crud' element={user ? <Crud /> : <Navigate to="/" />} />
        <Route path='/crudreal' element={user ? <CrudReal /> : <Navigate to="/" />} />
        <Route path='/pswdreset' element={<Resetpswd/>} />
        <Route path='/loginphone' element={<LoginPhone/>} />
        <Route path='/uploadImg' element={<UploadImg/>} />


      
      </Routes>
    </div>
  )
}

export default App
