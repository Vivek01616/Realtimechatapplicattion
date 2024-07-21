import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="container">
            <div className="content">
                <h3 className="title">Messenger</h3>
                <img
                    className="prfimg"
                    title="name"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    onClick={toggleDropdown}
                    alt="Profile"
                />
                <button className="button">Logout</button>
            </div>
            {dropdownOpen && (
                <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
                    <p class="lk">Profile</p>
                    <p class="lk">Logout</p>
                </div>
            )}
        </div>
    );
}

export default Navbar;
