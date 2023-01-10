import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(111, 144, 244, 1) 0%, rgba(111, 144, 244, 0.25) 25%, rgba(111, 144, 244, .5) 50%, rgba(111, 144, 244, 0.25) 75%, rgba(111, 144, 244, 1) 100%);
  
  .button-toTop{
    cursor: pointer;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    font-size: 2.5rem;
    color: #fff;
    background-color: cornflowerblue;
    border-radius: 50%;
  }

  img{
    width: 100%;
  }

  h1{
    color: #fff;
    font-size: 1.5rem;
    text-shadow: 0px 5px 5px #000;
  }
  
  .country{
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  .container{
    min-height: calc(100vh - 153px);
    background-color: rgba(0,0,0, .75);
    border-radius: 10px 10px 0 0;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0;
    width: 80%;
    color: #fff;
  }
  .weather-icon{
    width: 60px;
    object-fit: contain;
  }
  
  
  p:first-letter,h2:first-letter,h3:first-letter, h5:first-letter{
    text-transform: uppercase;
  }
  
  .info-temp{
    margin: 0 auto;
    margin-block: 2rem;
  }

  .info-temp h3{
    font-size: 1rem;
    color:rgba(111, 144, 244, 1);
    text-shadow: 0px 3px 5px #000;
  }
  
  .info-sun li:last-child{
  margin-block: 2rem;
  }

  button{
    cursor: pointer;
    width: 180px;
    height: 48px;
    border-radius: 10px;
    font-weight: bold;
    color: #000;
    background: rgba(255,255,255, .75);
    transition: all 350ms;
    &:hover{
      background: rgba(255,255,255, .5)
    }
  }
    
  .container-semanal{
    overflow-y: auto;
    display: block;
    height: 0px;
    transition: all 500ms;
    background-color: rgba(0,0,0, .75);
    border-radius: 0 0 10px 10px;
    margin: 0 auto;
    text-align: center;
    padding:  0;
    width: 80%;
    color: #fff;
  }
  
  .show-week{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .show-icon{
    font-size: 2rem;
    margin-inline: 1rem;
    color: #000;
    background: rgba(255,255,255, .75);
    border-radius: 50%;
    opacity: 0;
    transition: all 250ms;
  }

.show-icon.active{
  animation: flash 2s linear infinite;
  opacity: 1;
}
  
  @keyframes flash {
    0%{
        opacity: 1;
    }
    50%{
        opacity: .25;
    }
    100%{
        opacity: 1;
    }
}

  .container-semanal.active{
    height: calc(100vh - 153px)
  }

  .ul-semanal{
    display: inline-flex;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid #000;
  }

  .ul-semanal li{
    width: 20%;
  }

  .ul-semanal h3{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:rgba(111, 144, 244, 1);}
    
  .ul-icon{
    margin-left: 6px;
    width: 36px;
    object-fit: contain;
  }

 
  @media screen and (max-width: 900px){
    .container, .container-semanal{
      width: 90%;
    }
    
    .ul-semanal{
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      padding: 0;
      border-bottom: 0;
      
    }
    .ul-semanal li{
      width: 33%;
      margin-block: 6px;
    }
    
    .ul-semanal h3{
      flex-direction: row;
      align-items: center;
    }
    
    .ul-semanal li:nth-child(1), .ul-semanal li:nth-child(2){
      padding: 0 .5rem;
      margin-block: 1px;
      background-color: rgba(0,0,0, .5);
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
}
`