
import mongoose from 'mongoose';
import { app } from './app.js';
const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/TooksAppDB').then(() => {
    console.log('Conectado a mongodb')
}).catch((error) => console.log('error al conectar a mongo ' + error));


 
app.listen(PORT);
console.log('server on port ' + PORT)
