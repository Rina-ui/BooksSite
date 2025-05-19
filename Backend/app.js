import express from 'express';
import cors from 'cors';

const app = express();

import userRoutes from './routes/user.js'; //importing the routes

//connecting to the database
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://m40282897:ma-gra12@cluster0.7q1vrxe.mongodb.net/nom_de_ta_base?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Connexion a MongoDB échouée !', error));

app.use(express.json());
//middleware cors
app.use(cors({
  origin: 'http://localhost:5173', // authorised the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/auth', userRoutes); 




export default app;