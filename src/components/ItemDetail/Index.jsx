import React, { useState } from 'react';
import {useCartContext} from '../../Context/CartContext';
import ItemCount from '../ItemCount/Index';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const{addProduct} = useCartContext ();

    const onadd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    };
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                    <div className="content">
                        <h3>{data.title}</h3>
                        <h4>{data.detalle}</h4>
                        <p>{data.detail}</p>
                        { goToCart ? (
                                <Link to='/Cart'>Terminar compra</Link>
                        ) : (
                        <ItemCount initial={1} stock={5} onadd={onadd} />
                        )}
                
                </div>
            </div>
        </div>
    );
};
 export default ItemDetail;