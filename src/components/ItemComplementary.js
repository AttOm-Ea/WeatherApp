import './ItemComplementary.css';

function ItemComplementary({Name, Data}) {
    return (
        <div className='complementaryBox'>
            <div className='numberComplementary'> {Data} </div>
            <div className='nameComplementary'> {Name} </div>
        </div>
    );
}

export default ItemComplementary;