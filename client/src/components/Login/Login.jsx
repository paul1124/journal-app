import React, { useState, useEffect }from 'react';
import axios from 'axios';

export default function Login() {
    const [ login, setLogin ] = useState(true);
    const [ users, setUsers ] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/')
    //         .then(res => setUsers(res.data.map(user => user)))
    // })

    return (
        <div className="login">
            {login ? (
                <form action="" className="login-form">
                    <label htmlFor="usernaem">Username</label>
                    <input type="text" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" required />

                    <input type="submit" value="Login"/>
                </form>
            ) : (
                <form action="" className="signup-form">
                    <label htmlFor="usernaem">Username</label>
                    <input type="text" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" required />

                    <input type="submit" value="Sign up"/>
                </form>
            )}

            <button onClick={toggleLogin}>Sign Up</button>
            <button onClick={toggleLogin}>Log In</button>
            
        </div>
    )
    function toggleLogin(e) {
        setLogin(!login);
    }
}