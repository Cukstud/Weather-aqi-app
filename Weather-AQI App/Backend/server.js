import express from 'express';
import axios from 'axios'; 
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { error } from 'console';

dotenv.config();

const app = express();
app.use(cors());
app.get('/weather',async(r,res)=>{
    const {city} = r.query;
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({error:'Failed to fetch weather data'});
    }
});
app.get('/aqi',async(r,res)=>{
    const{lat,lon} = r.query;
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`)
        res.json(response.data);
    }
    catch{
        res.status(500).json({error:'Failed'});
    }
});
app.listen(5000,()=>{
    console.log('running')
})
