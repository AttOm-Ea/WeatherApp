import './NavBarBox.css';
import {useState, useEffect} from "react";
import { RiThunderstormsFill, RiDrizzleFill, RiRainyFill, RiSnowyFill, RiSunFill, RiCloudFill, RiMistFill} from 'react-icons/ri';


function NavBarBox({City, Country, Temp, Unit, Description, Icon}) { 

    //Custom Icons 
    const [CustomIcon, setCustomIcon] = useState ({
        Thunderstorm : <RiThunderstormsFill className='iconCustom'/>,
        Drizzle : <RiDrizzleFill className='iconCustom'/>,
        Rain : <RiRainyFill className='iconCustom'/>,
        Snow : <RiSnowyFill className='iconCustom'/>,
        Clear : <RiSunFill className='iconCustom'/>,
        Clouds : <RiCloudFill className='iconCustom'/>,
        Mist : <RiMistFill className='iconCustom'/>,
        Fog : <RiMistFill className='iconCustom'/>,
        Squall : <RiMistFill className='iconCustom'/>,
        Tornado : <RiMistFill className='iconCustom'/>,
    });
    const [IconPrint, setIconPrint] = useState(CustomIcon[Icon]);
    const [Hour, setHour] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [Seconds, setSeconds] = useState(0);
    const [Meridiem, setMeridiem] = useState("Am");
    const [Days, setDays] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                                                'Thursday', 'Friday', 'Saturday']);
    const [Day, setDay] = useState("");
    const [NumDay, setNumDay] = useState();
    const [Months, setMonths] = useState(['January', 'February', 'March', 'April', 
            'May', 'June', 'July', 'Agust', 'Septiember', 'October', 'November', 'December']);
    const [Month, setMonth] = useState(); 

    let date = new Date();    
    
    useEffect(()=>{
        setHour(date.getHours());
        setDay(Days[date.getDay()]);
        setNumDay(date.getDate());
        setMonth(Months[date.getMonth()]);
        setMinutes(date.getMinutes());
        // setSeconds(date.getSeconds());
    },[]);

    useEffect(()=>{ 
        if (Hour < 10) {
            setHour(`0${date.getHours()}`);
        } else {
            setHour(date.getHours());
        }
        if (Hour < 12) {
            setMeridiem("Am");
        } else {
            setMeridiem("Pm");
        }
    },[Hour]);

    useEffect(()=>{ 
        if (Minutes < 10) {
            setMinutes(`0${date.getMinutes()}`);
        }else{
            setMinutes(date.getMinutes());
        }
    },[Hour]);

    useEffect(()=>{
        console.log( Seconds );
        setTimeout(() => {
            setSeconds(Seconds + 1);   
            if (Seconds > 59) {
                setSeconds(0);
            }
        }, 1000);
    },[Seconds]);


    return (
        <div className='contentNavBar'>
            <div className='boxMaster'>
                <div className='timeBox'>
                    <div className='cardBox'>
                        <div className='cardTime'> 
                            <div> {Hour}  </div>
                            <div className='meridiem'> {Meridiem} </div>
                        </div>
                        <div className='cardTime cardTimeMinuts'> 
                            <div> {Minutes} </div>
                            <div className='meridiem'> {Seconds} </div>
                        </div>
                    </div>
                    <div className='dateBox'> {Day}, {NumDay} {Month} </div>
                </div>
                <div className='weatherBox'>
                    <div className='titleWeatherBox'>
                        <div className='titleCity'> {City} </div>
                        <div className='subTitleCity'> {Country} </div>
                    </div>
                    <div className='mainWeatherBox'>
                        <div className='contentWeatherBox'> 
                            <div className='description'> {Description} </div>
                            <div className='numberUnit'> {Temp}º </div>
                            <div className='leterUnit'> {Unit} </div>
                        </div>
                        <div className='iconWeatherBox'> 
                            {/* <img src={UrlIcon} alt={Icon}/> */}
                            {IconPrint}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBarBox;
