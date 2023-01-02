import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";





function Live() {
  const api_key = '7b9f700d5f985dd21792000657bd66d0';
  const { id } = useParams()
  const [weather, setWeather] = useState([])
  const findById = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api_key}&units=metric&lang=pt_br`
  const [forecast, setForecast] = useState([])
  const weekly = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${api_key}&units=metric&lang=pt_br`;
  const [expandWeekly, setExpandWeekly] = useState(false);
  const daysNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  useEffect(() => {
    fetch(`${findById}`)
      .then((response) => response.json())
      .then((data) => {
        // CURRENT WEATHER 
        const weather = {
          city: data?.name,
          country: data.sys?.country,
          sunriseHour: new Date(data.sys?.sunrise * 1000).getHours(),
          sunriseMinutes: new Date(data.sys?.sunrise * 1000).getMinutes(),
          sunsetHour: new Date(data.sys?.sunset * 1000).getHours(),
          sunsetMinutes: new Date(data.sys?.sunset * 1000).getMinutes(),
          temp: Math.round(data.main?.temp),
          feels_like: Math.round(data.main?.feels_like),
          status: data.weather ? data.weather[0].main : '',
          description: data.weather ? data.weather[0].description : '',
          icon: data.weather ? data.weather[0].icon : '',
        }
        setWeather(weather);
      }
      )
  }, [id])

  useEffect(() => {
    fetch(`${weekly}`)
      .then((response) => response.json())
      .then((data) => {
        // 5day WEATHER 
        const arr = data.list;
        setForecast(arr)
      }
      )
  }, [])
  console.log(forecast)
  return (
    <>
      <Header />
      <Container>
      <RiArrowUpSLine className="button-toTop" onClick={() => window.scrollTo(0,0)}/>
        <h1>{weather?.city}</h1>
        <span className="country">{weather?.country}</span>
        <div className="container">
          <h2>Agora</h2>
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.status} />
          <h3>{weather?.description}</h3>
          <ul className="info-temp">
            <li>
              <h3>Sensação térmica</h3>
              <p>{`${weather?.feels_like}°C`}</p>
            </li>
            <li>
              <h3>Temperatura Atual</h3>
              <p>{`${weather?.temp}°C`}</p>
            </li>
          </ul>
          <ul className="info-sun">
            <li>
              <h4>Nascer do sol</h4>
              <p>{`${weather?.sunriseHour}:${weather?.sunriseMinutes}`}</p>
            </li>
            <li>
              <h4>Pôr do sol</h4>
              <p>{`${weather?.sunsetHour}:${weather?.sunsetMinutes}`}</p>
            </li>
          </ul>
          <div className="show-week">
            <RiArrowDownSLine className={expandWeekly ? "show-icon active" : 'show-icon'} />
            <button onClick={() => setExpandWeekly(!expandWeekly)}>
              Na semana
            </button>
            <RiArrowDownSLine className={expandWeekly ? "show-icon active" : 'show-icon'} />
          </div>
        </div>
        {/* /////////////////////////////////////////////////SEMANAL */}
        <div className={expandWeekly ? "container-semanal active" : 'container-semanal'} >
          {expandWeekly === true && forecast.map(item => (
            <ul className="ul-semanal">
              <li>
                <h3>{daysNames[new Date(item.dt * 1000).getDate() - 1]}<img className="ul-icon" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={weather.status} /></h3>
                <h5>{item.weather[0].description}</h5>
                <h3>{`${new Date(item.dt * 1000).getHours()}:00`}</h3>
              </li>
              <li><h5>Mínima</h5>
                <p>{`${Math.floor(item.main.temp_min)}° C`}</p>
              </li>
              <li>
                <h5>Sensação térmica</h5>
                <p>{`${Math.round(item.main.feels_like)}° C`}</p>
              </li>
              <li><h5>Máxima</h5>
                <p>{`${Math.ceil(item.main.temp_max)}° C`}</p>
              </li>
            </ul>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Live;