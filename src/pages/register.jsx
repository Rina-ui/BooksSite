import react from 'react';

function Register(){
    return(
        <div>
            <h1>Register</h1>
            <fieldset>
                <legend>Register</legend>
                <from>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required /><br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required /><br />
                    <button type="submit">Register</button>
                </from>
            </fieldset>
        </div>
    )
        
    
}