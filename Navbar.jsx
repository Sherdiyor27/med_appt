import React from 'react';

const Navbar = () => {
    const handleLogout = () => {
        // Tizimdan chiqish: tokenni o'chirish va sahifani yangilash
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("email");
        window.location.reload();
    };

    const isLoggedIn = sessionStorage.getItem("auth-token");

    return (
        <nav className="navbar">
            <div className="logo">StayHealthy</div>
            <ul className="nav-links">
                <li><a href="/appointments">Appointments</a></li>
                {isLoggedIn ? (
                    <li onClick={handleLogout} className="btn-logout">Logout</li>
                ) : (
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
