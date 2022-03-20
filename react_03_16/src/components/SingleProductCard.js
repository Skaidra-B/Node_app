import React, {useState} from 'react';
import Modal from 'react-modal'
import Calendar from "../components/Calendar"


Modal.setAppElement('#root')

const SingleProductCard = ({item}) => {


    return (
        <div className="singleCard">
            <div className="d-flex">
                <img src={item.photo} alt=""/>
                <div>
                    <h3>City: {item.city}</h3>
                    <h3>Price: {item.price}</h3>
                    <div><b>Description: </b>{item.description}</div>
                </div>
            </div>
                <Calendar id={item._id}/>
        </div>
    );
};

export default SingleProductCard;