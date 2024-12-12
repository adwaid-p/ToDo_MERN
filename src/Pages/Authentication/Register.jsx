import React, { useState } from "react";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="register_body">
            <form action="#" method="post">
                <h1>Register</h1>
                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Ravi" required />
                <input type="email" id="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Ravi@gmail.com" required />
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="**********" required />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
