import Header from "../../components/Header";
import Nav from "../../components/Nav";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,110,255, 0) 0%, rgba(0,110,255, 0) 25%, rgba(0,110,255, 0) 50%, rgba(0,200,125, 1) 100%);
  min-height: calc(100vh - 144px);
  
  
  
  .search-bar{
    width: 80%;
    display: flex;
    align-items: center;
  }
  input{
    border-radius: 10px 0 0 10px;
    background-color: #ddd;
    margin-block: 1rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: 90%;
    height: 36px;
    
  }
  .search-button{
    border-radius: 0 10px 10px 0;
    width: 10%;
    height: 36px;
    cursor: pointer;
    color: #fff;
    background-color: #404040;
  }
  .icon{
    height: 100%;
    font-size: 1.5rem;
  }

  section{
    background-color: rgba(255,255,255, .75);
    min-height: calc(100vh - 144px);
    width: 80%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  
  .container{
    width: 90%;
  }

  .title{
    text-align: center;
    width: 30%;
  }

  .box{
    background-color: rgba(0,0,0, .75);
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    width: 75%;
    color: #fff;
  }

  h4{
    margin-top: .5rem;
    font-size: 2rem;
  }
  
  h5{
    color: rgba(0,200,125, 1);
    margin-top: .5rem;
    font-size: 1.25rem;
    }
  
  p::first-letter{
    text-transform: uppercase;
  }

  @media screen and (max-width: 900px){
  padding: 1rem 0;
  
  section{
    min-height: calc(100vh - 300px);
  }

  .box{
    width: 100%;
  }

  .title{
    text-align: center;
    width: 100%;
  }

  h4{
    margin-top: .5rem;
    font-size: 1.5rem;
  }
  h5{
    font-size: 1rem;
  }
  }
`



function App() {
  const api_key = '7b9f700d5f985dd21792000657bd66d0';
  const [input, setInput] = useState('');
  const [location, setLocation] = useState('sao paulo')
  const [weather, setWeather] = useState([])
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},BR&appid=${api_key}&units=metric&lang=pt_br`)
      .then((response) => response.json())
      .then((data) => {
        // CURRENT WEATHER 
        const weather = {
          city: data.name,
          country: data.sys.country,
          currentTemp: data.main.temp,
          temp: Math.round(data.main.temp),
          minTemp: Math.round(data.main.temp_min),
          maxTemp: Math.round(data.main.temp_max),
          feels_like: Math.round(data.main.feels_like),
          status: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        }
        setWeather(weather);
        console.log(data)
      }
      )
  }, [location])
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <div className="search-bar">
          <input value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="search-button" onClick={() => {setLocation(input); setInput('')}}>
            <RiSearchLine className="icon" />
          </button>
        </div>
        <section>
          <div className="title">
            <h2>{weather.city || "Cidade"}</h2>
            <h3>{weather.country || "País"}</h3>
          </div>
          <div className="container">
            <div className="box">
              <h3>Agora</h3>
              <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.status} />
              <h3>{weather.status}</h3>
              <p>{weather.description}</p>
              <h4>{`${weather.temp}°C`}</h4>
              <h5>Sensação térmica</h5>
              <p>{`${weather.feels_like}°C`}</p>
              <h5>Temperatura minima</h5>
              <p>{`${weather.minTemp}°C`}</p>
              <h5>Temperatura maxima</h5>
              <p>{`${weather.maxTemp}°C`}</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default App;