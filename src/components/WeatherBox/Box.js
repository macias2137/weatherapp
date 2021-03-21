import React, { useState } from 'react';
import WeatherList from '../WeatherList/WeatherList'

function Box({ ...props }) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="box basic-box"
            onClick={() => { setIsHidden(!isHidden) }}>
            <div className="weather-info-container">
                <div className="city-name-container">
                    <h1>{props.city}</h1>
                </div>
                <h3>{Math.round(props.temp)}&#176;C</h3>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="dupa" />
            </div>
            {!isHidden && <WeatherList className="box weather-list" lat={props.lat} lon={props.lon} apiKey={props.apiKey} />}
        </div>
    )
}

export default Box;