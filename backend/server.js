import express from 'express';
import albums from './data/albums.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//get access to port stored in .env file
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.get('/', (req, res)=> {
  res.send('hello there');
});

app.get('/api/albums', (req, res)=> {
  res.json(albums);
})

app.get('/api/albums/:id', (req, res) => {
  const albumId = req.params.id;
  const album = albums.find(a => a._id === albumId);
  res.json(album);
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));