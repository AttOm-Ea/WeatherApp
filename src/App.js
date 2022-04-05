import {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import NavBarBox from './components/NavBarBox';
import ComplementaryBarBox from './components/ComplementaryBarBox';
import AsideBarBox from './components/AsideBarBox';
import Spinner from './components/Spinner';

function App() {
  // Spinner
  const [preloader, setpreloader] = useState(true);
  // Wallpapers
  const [Wallpaper, setWallpaper] = useState();
  // Metric Sistem
  const [MetricSistem, setMetricSistem] = useState("metric");
  // NavBar State
  const [City, setCity] = useState("Xalapa");
  const [Country, setCountry] = useState("Mx");
  const [Temp, setTemp] = useState("-0");
  const [Unit, setUnit] = useState("Celsius");
  const [Icon, setIcon] = useState("01d");
  const [UrlIcon, setUrlIcon] = useState(`http://openweathermap.org/img/wn/${Icon}@2x.png`);
  const [Description, setDescription] = useState("Clear");
  // Complementary State
  const [FeelsLike, setFeelsLike] = useState("0");
  const [TempMin, setTempMin] = useState("0");
  const [TempMax, setTempMax] = useState("0");
  const [Pressure, setPressure] = useState("0");
  const [Humutidy, setHumutidy] = useState("0");

  useEffect(()=>{ // IpApiUbi
    axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=5fd73110d1634cf0a3ff976dffe24caa')
    .then(response => {
        setCity(response.data.city);
    })
    .catch(error => {
        console.log("error1");
    });
  },[]);

  useEffect(()=>{ // WeatherApi
    setpreloader(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=1dfc262a51be9a7832f8198b6f5e2da6&units=${MetricSistem}`;
    axios.get(url)
    .then((result) => {
        // NavBar State
      setCountry(result.data.sys.country);
      setTemp(result.data.main.temp);
        // setUnit();
      setIcon(result.data.weather[0].icon);
      setWallpaper(result.data.weather[0].main);
      setUrlIcon(`http://openweathermap.org/img/wn/${Icon}@2x.png`);
      setDescription(result.data.weather[0].description);
        // Complementary State
      setFeelsLike(result.data.main.feels_like);
      setTempMin(result.data.main.temp_min);
      setTempMax(result.data.main.temp_max);
      setPressure(result.data.main.pressure);
      setHumutidy(result.data.main.humidity);
          setTimeout(() => {
            setpreloader(false);
          }, 3000);
    }).catch((err) => {
      setCity("Xalapa");
      setpreloader(false);
    });
  },[City, MetricSistem]);

  useEffect(()=>{ 
    if (Unit === "Fahrenheit") {
      setUnit("Celsius");
    }else{
      setUnit("Fahrenheit");
    }
  },[MetricSistem]);

  if (preloader == false) {
    return (
      <div className={`app ${Wallpaper}`}>
          <section className='firstSection'>
            <NavBarBox City={City} Country={Country} Temp={Temp} Unit={Unit} Icon={Icon} UrlIcon={UrlIcon} Description={Description}/>
            <ComplementaryBarBox FeelsLike={FeelsLike} TempMin={TempMin} TempMax={TempMax} Pressure={Pressure} Humutidy={Humutidy}/>
          </section>
          <section className='secondSection'>
            <AsideBarBox MetricSistem={MetricSistem} FunctionMetric={setMetricSistem} FunctionCity={setCity}/>
          </section>
      </div>
    );  
  }else{
    return (
      <div className="preloader">
          <Spinner/>
          <section className='secondSection'>
            <AsideBarBox MetricSistem={MetricSistem} FunctionMetric={setMetricSistem} FunctionCity={setCity}/>
          </section>
      </div>
    );  
  }
}

export default App;
