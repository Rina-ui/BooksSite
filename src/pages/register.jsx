import react, { use } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3000/api/auth/signup', {
                email: emailValue,
                password: passwordValue
            });

            alert('User registered successfully');
        }catch (error){
            console.error(error);
            alert('Error registering user');
        }
    };
    return(
        <div>
            <h1>Register</h1>
            <fieldset>
                <legend>Register</legend>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required /><br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required /><br />
                    <button type="submit">Register</button>
                </form>
            </fieldset>
        </div>
    )
        
    
}

export default Register;
