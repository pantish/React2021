import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Register } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostsIdPage from '../pages/PostsIdPage';
import { publicRoute, privateRoute } from '../router/routes';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

    return (
        isAuth
        ? <Routes>
        {privateRoute.map(route => 
            <Route 
            element={route.element} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
            />
        )}
        <Route path="*" element={<Posts/>}/>
      </Routes>
        : <Routes>
        {publicRoute.map(route => 
            <Route 
            element={route.element} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
            />
        )}
        <Route path="*" element={<Login/>}/>

      </Routes>
    
    )
}

export default AppRouter
