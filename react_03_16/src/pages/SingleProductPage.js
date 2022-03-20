import React, {useEffect, useState} from 'react';
import http from "../plugins/http";
import {useParams} from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";

const SingleProductPage = () => {
    const {id} = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        http.get("/product/"+id).then(res => {
            setProduct(res.apartment)
        })
    }, [])


    return (
        <div className="d-flex j-center">
            <SingleProductCard item={product}/>
        </div>
    );
};

export default SingleProductPage;