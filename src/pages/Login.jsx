import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";


function Login() {

    return (
        <div>
        <motion.h1>
            Login
        </motion.h1>
        <fieldset>
            <legend>Login</legend>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required /><br />
                <button type="submit">Login</button>
                <p>Don't you have a compte?</p>
                <Link to="/Register">Sign up</Link>
            </form>
        </fieldset>
        </div>
    );
}

export default Login;