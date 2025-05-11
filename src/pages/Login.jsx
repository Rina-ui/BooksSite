import React from "react";


function Login() {

    return (
        <div>
        <h1>Login</h1>
        <fieldset>
            <legend>Login</legend>
            <form>
                <label htmlFor="name">Username</label>
                <input type="text" id="nmae" name="name" required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required /><br />
                <button type="submit">Login</button>
                <p>Don't you have a compte?</p>
                <a href="/register">Register</a>
            </form>
        </fieldset>
        </div>
    );
}

export default Login;