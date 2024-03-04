import React from 'react'
import './Nav.min.css'
export default function Nav() {
    return (
        <nav>

            <img className='logo' src="src/assets/Images/logo.png" alt="Website logo" />
            <div className='header'>Connectify</div>
            <div className="navItems">

                <button>Leaderboard</button>
                <button>Projects</button>
                <button className="login-btn">Login</button>
            </div>
        </nav>
    )
}
