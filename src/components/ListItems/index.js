import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = styled.ul`
background-color: rgba(255,255,255, .5);
padding: 1rem;
border-radius: 10px;
width: 60%;

@media screen and (max-width: 900px){
  background-color: rgba(0,0,0, .5);
  padding: 0;
  width: 80%;

}
`

const Item = styled.li`
  display: inline-flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 10px;
  background-color: rgba(0,0,0, .5);
  transition: all 350ms;
  
  &:hover{
    background-color: rgba(0,0,0, .25);
  }


img{
    width: 100%;
}
  
.weather-icon{
  height: 54px;
  width: 30%;
  object-fit: contain;
}
  
h4{
  font-size: 1rem;
  text-align: left;
  width: 30%;
  color: #fff;
}
  
span{
  width: 30%;
  display: inline-flex;
  justify-content: space-around;
} 
  
p{
    color: #fff;
  }
@media screen and (max-width: 900px){
  background-color: rgba(0,0,0, 0);
  border-radius: 0px;
  padding: 0 .5rem;
  margin-block: 0;

    .weather-icon{
      width: 10%;
    }
  
    h4{
      width: 40%;
    }
    
     span{
      width: 40%;
      text-align: center;
    }
    p{
      width: 40%;
    }
}
`

export function ListItems( { setCustomLocation }) {
  const api_key = '7b9f700d5f985dd21792000657bd66d0';
  const [weather, setWeather] = useState([]);
  const citiesCode = "3452925,3463237,3464975,3448439,3451190,3405825,3444924,3465038,3467745,3462377,3471872,3390760,3397277,3394023,6320062,3386496,3388368,3474574,3405870,3663517";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/group?id=${citiesCode}&appid=${api_key}&units=metric&lang=pt_br`)
      .then((response) => response.json())
      .then((data) => {
        //COUNTRY CAPITALS WEATHER
        const citiesList = data.list;
        setWeather(citiesList)
      }
      )
  }, [])
  return (<>
  <List>
    {weather.map(
      (item) => (
        // <Link  key={item.id} to={`/capitais/${item.id}`}>
          <Item key={item.id} onClick={() => {setCustomLocation(item.name); document.title = `${item.name} - Climaki Weather Forecast`}}>
            <h4>{item.name}</h4>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="Weather Icon" />
            <span>
              <p>Min: {Math.floor(item.main.temp_min)}° C</p>
              <p>Max: {Math.ceil(item.main.temp_max)}° C</p>
            </span>
          </Item>
        // </Link>
      )
    )
    }
    </List>
  </>)
}