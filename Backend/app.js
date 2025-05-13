import express from 'express';

const app = express();

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
//middleware
app.use((res, req, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requestred-With, Content-Type, Accept');
    res.setHeader('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
})


export default app;