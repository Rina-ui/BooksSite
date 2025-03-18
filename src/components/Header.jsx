import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(){
    return(
        <div>
            <header>
                <h1>BookHorizon📚 </h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/logout">LogOut</Link></li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;