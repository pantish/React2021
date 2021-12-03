import react, { useRef, useState, useMemo, useEffect} from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import '../src/styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])
 return (
   <AuthContext.Provider value={{
     isAuth,
     setIsAuth,
     isLoading
   }}>
     <BrowserRouter>
   <Navbar/>
   <AppRouter/>
   </BrowserRouter>
   </AuthContext.Provider>
   
 );

};

export default App;
