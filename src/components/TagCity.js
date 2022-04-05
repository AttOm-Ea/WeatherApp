import {useState, useEffect} from "react";
import axios from 'axios';
import './TagCity.css';

function TagCity({Name, MetricSistem}) {
    
    const [TempI, setTempI] = useState(0);
    const [Max, SetMax] = useState(0);
    const [Min, SetMin] = useState(0);
    const [DescriptionI, setDescriptionI] = useState("Clear");

    useEffect(()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${Name}&appid=1dfc262a51be9a7832f8198b6f5e2da6&units=${MetricSistem}`;
        axios.get(url)
        .then((result) => {
            setTempI(result.data.main.temp);
            setDescriptionI(result.data.weather[0].description);
            SetMin(result.data.main.temp_min);
            SetMax(result.data.main.temp_max);
        }).catch((err) => {
            console.log("error3");
        });
    },[MetricSistem]);

    return (
        <div className='tagCity'>
            <div className='nameTagBox'> 
                <div className="nameTag1"> {Name} </div>
                <div className="nameTag2"> {DescriptionI} </div>
            </div>
            <div className='numbersTag'>
                <div> {TempI}º  </div>
                <div> min {Min}º / max {Max}º  </div>
            </div>
        </div>        
    );
}

export default TagCity;
