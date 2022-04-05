import './ComplementaryBarBox.css';
import ItemComplementary from './ItemComplementary.js';

function ComplementaryBarBox({FeelsLike, TempMin, TempMax, Pressure, Humutidy}) {
    return (
        <div className='contentComplementaryBar'>
            <div className='boxComplementary'> 
                <ItemComplementary Name={"Feels Like"} Data={`${FeelsLike}º`}/>
                <ItemComplementary Name={"Temp Min"} Data={`${TempMin}º`}/>
                <ItemComplementary Name={"Temp Max"} Data={`${TempMax}º`}/>
                <ItemComplementary Name={"Pressure"} Data={`${Pressure}%`}/>
                <ItemComplementary Name={"Humidity"} Data={`${Humutidy}%`}/>
            </div>
        </div>
    );
}

export default ComplementaryBarBox;
