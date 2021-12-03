import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout} >
                Exit
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">About site</Link>       
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default Navbar
