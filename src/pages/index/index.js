import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { RiSearchLine, RiArrowDownSLine, RiArrowUpLine } from "react-icons/ri";
import { ListItems } from "../../components/ListItems";
import { Container } from "./styles";
import Subtitle from "../../components/Subtitle";


function Home() {
  const api_key = '7b9f700d5f985dd21792000657bd66d0';
  const [input, setInput] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [weather, setWeather] = useState([]);
  const clearLocation = () => setCustomLocation('');
  const searchOnEnter = props => props.keyCode === 13 ? setCustomLocation(input) + setInput('') : '';

  /////////////////////////////
  const [forecast, setForecast] = useState([]);
  const [expandWeekly, setExpandWeekly] = useState(false);
  const daysNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  ////////////////////////////



  useEffect(() => {
    // CURRENT WEATHER 
const fetchWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`)
        .then((response) => response.json())
        .then((data) => {
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
      id: data.id
    }
    setWeather(weather);
  })
}
const fetchForecast = () => {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`)
  .then((response) => response.json())
  .then((data) => {
    // 5day WEATHER 
    const arr = data.list;
    setForecast(arr);
  }
  )
};
Promise.all([fetchWeather(), fetchForecast()])
}, [customLocation])
return (
    <>
      <Header clearLocation={clearLocation} />
      <Subtitle />
      <Container>
        <div className="search-bar">
          <input type='text' placeholder="Pesquisar cidade" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => searchOnEnter(e)} />
          <button className="search-button" onClick={() => { setCustomLocation(input); }}>
            <RiSearchLine className="icon" />
          </button>
        </div>
        {customLocation ?
          <>
            <h1>{weather.city}</h1>
            <span className="country">{weather.country}</span>
        <RiArrowUpLine className="button-toTop"  onClick={() => window.scrollTo(0,0)}/>
          </> : <h1 className="page-title">Principais cidades</h1>}
        <>
          {customLocation ?
            <>
              <div className="container">
                <h2>Agora</h2>
                <img className="weather-icon" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.status} />
                <h3>{weather.description}</h3>
                <ul className="info-temp">
                  <li>
                    <h3>Sensação térmica</h3>
                    <p>{`${weather.feels_like || ''}°C`}</p>
                  </li>
                  <li>
                    <h3>Temperatura Atual</h3>
                    <p>{`${weather.temp || ''}°C`}</p>
                  </li>
                </ul>
                <ul className="info-sun">
                  <li>
                    <h4>Nascer do sol</h4>
                    <p>{`${weather.sunriseHour || ''}:${weather.sunriseMinutes || ''}`}</p>
                  </li>
                  <li>
                    <h4>Pôr do sol</h4>
                    <p>{`${weather.sunsetHour || ''}:${weather.sunsetMinutes || ''}`}</p>
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
              <div className={expandWeekly ? "container-semanal active" : 'container-semanal'} >
                {expandWeekly === true && forecast.map(item => (
                  <ul className="ul-semanal" key={forecast.indexOf(item)}>
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
            </> : <ListItems />}
        </>
      </Container>
    </>
  );
}

export default Home;