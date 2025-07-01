import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        email,
        password
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l’inscription :', error);
    }
  };

  return (
    <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit">S'inscrire</button>
        </form>
 
    </div>
 );
};

export default Register;
