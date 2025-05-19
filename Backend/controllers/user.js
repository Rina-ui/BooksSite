import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
export const signup = async (req, res) => {
    console.log('Body reçu:', req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé !' });
  } catch (error) {
    console.error('Signup error:', error);  // <-- Ajoute ça
    res.status(500).json({ error: error.message });
  }
};


export const login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user === null){
                return res.status(401).json({message: 'Paire identifiant/mot de passe incorrect'});
            }else{
                bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({message: 'Paire identifiant/mot de passe incorrect'});
                    }else{
                        return res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                {
                                    userId: user._id
                                },
                                'RANDOM_TOKEN_SECRET',
                                {
                                    expiresIn: '24h'
                                }
                            )
                        });
                    }
                })
                .catch(error => res.status(500).json({error}));
            }
        })
        .catch(error => res.status(500).json({error}));
    
};
