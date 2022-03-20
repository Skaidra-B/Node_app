import React, {useState, useEffect} from 'react';
import http from "../plugins/http"
import SingleProduct from "../components/SingleProduct";

const AllProductsPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        http.get("/allProducts").then(res => {
            setProducts(res.products)
        })
    }, [])

    return (
        <div className="d-flex wrap">
            {products.map((x, i) => <SingleProduct item={x} key={i}/>)}
        </div>
    );
};

export default AllProductsPage;