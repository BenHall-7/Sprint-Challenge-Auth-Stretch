import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    return <div>
        <form onSubmit={e => {
            e.preventDefault();
            if (e.target.name === "login") {
                console.log(username, password);
                axios.post("http://localhost:3300/api/auth/login", {username, password})
                    .then(({data: {token}}) => {
                        localStorage.setItem("token", token);
                        props.history.push("/");
                    })
                    .catch(err => {
                        setError(true);
                        console.error(err);
                    });
            } else {
                axios.post("http://localhost:3300/api/auth/register", {username, password})
                    .then(({data: {token}}) => {
                        localStorage.setItem("token", token);
                        props.history.push("/");
                    })
                    .catch(err => {
                        setError(true);
                        console.error(err);
                    });
            }
        }}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {error && <div>
                error
            </div> || null}
            <button name="login">Login</button>
            <button name="register">Register</button>
        </form>
    </div>;
}