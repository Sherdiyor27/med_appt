import React, { useState } from 'react';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        // Registration API chaqiruvi
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, phone }),
        });

        const json = await response.json();
        if (json.token) {
            sessionStorage.setItem("auth-token", json.token);
            alert("Registration Successful!");
        } else {
            alert("Registration Failed");
        }
    };

    return (
        <form onSubmit={register}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Sign_Up;
