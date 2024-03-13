import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [inputCity,setInputCity] = useState("");
  const [data, setData] = useState({});

  const apikey="89989629d3d0c8471c1affbeafacb043"
  function getWeatherDetails(cityname){
    if(!cityname) return
    const getUrl="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apikey
       axios.get(getUrl).then((res)=>{
        console.log("response",res.data)

        setData(res.data)

       }).catch((err)=>{
        console.log("err",err)
       })
  }
  function heandlChangeInput(e){
    console.log("value",e.target.value);
    setInputCity(e.target.value)
  }

  function heandlSearch(){
    getWeatherDetails(inputCity)
  }

  useEffect(()=>{
         getWeatherDetails("delhi")
  },[])
  return (
    <>
    <div className='col-md-12'>
      <div className='wetherbg'> 
      <h1 className='heading'>Weather App</h1>
      <div className='d-grid gap-2 col-4 mt-4'>
      <input type='text' className='form-control' value={inputCity} onChange={heandlChangeInput}/>
      <button className='btn btn-primary' type='button' onClick={heandlSearch}>Search</button>
      </div>
      </div>

      <div className='col-md-12 text-center mt-5'>

        <div className='shadow rounded wetherResultBox'>
          <img className='img' src={'weather.avif'}/>
            
            <h4 className='cityname'>{data?.name}</h4>
            <h3 className='temp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h3>

        </div>

      </div>
    </div>
    </>
  );
}

export default App;
