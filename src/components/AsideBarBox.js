import { BsSearch } from 'react-icons/bs';
import './AsideBarBox.css';
import TagCity from './TagCity';

function AsideBarBox({MetricSistem, FunctionMetric, FunctionCity}) {
    return (
        <div className='asideBox'>
            <div className='logoBox'>
                <div className='logo'> </div>
            </div>
            <div className='citiesBox'>
                <TagCity Name={"Moscu"} MetricSistem={MetricSistem}/>
                <TagCity Name={"Tokio"} MetricSistem={MetricSistem}/>
                <TagCity Name={"Paris"} MetricSistem={MetricSistem}/>
                <TagCity Name={"New York"} MetricSistem={MetricSistem}/>
                <TagCity Name={"London"} MetricSistem={MetricSistem}/>
            </div>
            <div className='inputsBox'>
                <div className='radioBox'>
                    <div className='nameRadio'> Unit type  </div>
                    <div className='iputsRadioBox'>
                        <input className='inputRadio' type="radio" id="Celsius" name='unit'/>
                            <label className='labelRadio' htmlFor="Celsius" onClick={()=>FunctionMetric("metric")} > Celsius </label>
                        <input className='inputRadio' type="radio" id="Fahrenheit" name='unit'/>
                            <label className='labelRadio' htmlFor="Fahrenheit" onClick={()=>FunctionMetric("Imperial")}> Fahrenheit </label>
                    </div>
                </div>
                <div className='searchBox'>
                    <label className='nameSearch' htmlFor="fname"> City search </label>
                    <div className='searchBoxSecond'>
                        <input className='inputSearch' type="text" id="fname" name="fname" placeholder='City...' onBlur={(e)=>FunctionCity(e.target.value)} />
                        <BsSearch className='iconSearch'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsideBarBox;
