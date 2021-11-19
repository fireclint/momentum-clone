import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyles'


const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=569adb4e6e9b390acf9c205013272156'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])

    console.log(data)

    if(!data) return null;

    return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
            <City>Dallas, TX</City>
        </WeatherContainer>
    )
}

export default Weather
