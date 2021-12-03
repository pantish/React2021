import React from 'react';
import { useContext } from 'react/cjs/react.development';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MuInput';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Username"/>
                <MyInput type="password" placeholder="Password"/>
                <MyButton>Sing In</MyButton>
            </form>
        </div>
    )
}

export default Login
