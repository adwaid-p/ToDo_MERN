import React, { useState } from "react";
import "./Register.css";

function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="register_body">
            <form action="#" method="post">
                <h1>Login</h1>
                <input type="email" id="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Ravi@gmail.com" required />
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="**********" required />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
