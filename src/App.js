import { useState } from "react";
import axios from "axios";

function Weather()
{

  const [city, setcity] = useState("")

  const [Weather, setWeather] = useState("")

  const [Temp, setTemp] = useState("")

  const [desc,setdesc] = useState("")

  function handleCity(evt)
  {
    setcity(evt.target.value)

  }

  function getweather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2ec24a2cc0dd65d0cbbe2bc9080f854`)

    weatherData.then(function(success)
  {
    console.log(success.data)
    setWeather(success.data.weather[0].main)
    setdesc(success.data.weather[0].description)
    setTemp(success.data.main.temp)
  })
  }
    return(
        <div className="bg-black p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md" placeholder="Enter Your City Name"></input> <br></br>
                <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>

                <div className="mt-2">
                  <h1><b>Weather: </b>{Weather}</h1>
                  <p><b>Temperature: </b>{Temp}</p>
                  <p><b>Description: </b>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Weather;
