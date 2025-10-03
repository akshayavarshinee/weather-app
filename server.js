import express from 'express';
import axios from 'axios';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const apikey = "84a76a61402308faea64751ac4a38115";

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.post("/submit", async (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body["city"]}&appid=${apikey}&units=metric`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    res.render('index', { data: weatherData, error: null });
  } catch (err) {
    res.render('index', { data: null, error: 'City not found or API error' });
  }
});

app.get("/", (req, res) => {
  res.render('index', { data: null, error: null });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});