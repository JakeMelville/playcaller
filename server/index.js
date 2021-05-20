import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from '../routes/posts.js'

//intiailize the app and create my port
const app = express();
const PORT = process.env.PORT || 3030;

app.use('/posts', postRoutes)

// setting up the body parsing for static and routing middleware
app.use(bodyParser.json({ limit : '30mb', extended: true}))
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

const CONNECTION_URL = 'mongodb+srv://mongo:mongo@cluster0.p8buu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`)))
  .catch((err) => console.log(err.message));


mongoose.set('useFindAndModify', false);
