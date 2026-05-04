import { useState, useEffect } from 'react'
import './Weather.css'

const Weather = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {

        const fetchCall = async () => {

            try {
                const apiCall = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")

                const resData = await apiCall.json()

                setWeather({
                    temp: resData.hourly.temperature_2m[0],
                    humidity: resData.hourly.relative_humidity_2m[0],
                    wind: resData.hourly.wind_speed_10m[0]
                })
            } catch (err) {
                alert(err)
            }
        }
        fetchCall()

    }, [])

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

    return (
        <section className="comm-section">
            <div className="container">
                <div className="comm-wrap">
                    <div className="weather-card">

                        <div className="weather-card-header">
                            <div className="weather-city">
                                <span className="weather-location-icon">📍</span>
                                Mumbai, India
                            </div>
                            <div className="weather-date">{today}</div>
                        </div>

                        <div className="weather-stats">
                            {weather ? (
                                <>
                                    <div className="weather-dtl">
                                        <span className="weather-icon">🌡️</span>
                                        <div className="weather-info">
                                            <div className="weather-label">Temperature</div>
                                            <div className="weather-value">
                                                {weather.temp}
                                                <span className="weather-unit">°C</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="weather-dtl">
                                        <span className="weather-icon">💧</span>
                                        <div className="weather-info">
                                            <div className="weather-label">Humidity</div>
                                            <div className="weather-value">
                                                {weather.humidity}
                                                <span className="weather-unit">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="weather-dtl">
                                        <span className="weather-icon">💨</span>
                                        <div className="weather-info">
                                            <div className="weather-label">Wind Speed</div>
                                            <div className="weather-value">
                                                {weather.wind}
                                                <span className="weather-unit">km/h</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="weather-loading">Fetching weather data...</div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather
