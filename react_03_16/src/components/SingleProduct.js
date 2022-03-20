import React from 'react';
import {Link} from "react-router-dom"

const SingleProduct = ({item}) => {


    return (
        <div className="productCard">
            <img src={item.photo} alt=""/>
            <div>{item.city}</div>
            <div>{item.price}</div>
            <Link to={`/product/`+item._id}><button>See details</button></Link>

        </div>
    );
};

export default SingleProduct;