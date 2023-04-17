import './ItemCount.css';
import React, {useEffect, useState} from 'react'; 


export const ItemCount = ({initial, stock, onadd}) => {
    const [count, setCount] = useState(parseInt(initial));
   
    const decrease = () => {
        setCount(count - 1);
    }
    const increase= () => {
        setCount( count + 1);  
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])
    
    return (
        <div className='counter'>
            <button disabled={count <=1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div className='count'>
                <button disabled={stock <= 0} onClick={() => onadd(count)}>Agregar al carrito</button>
            </div>

        </div>
    );

}
export default ItemCount;