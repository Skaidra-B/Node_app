import React from 'react';
import Filter from "../components/Filter";
import {useContext} from "react";
import mainContext from "../context/mainContext";
import SingleProduct from "../components/SingleProduct";

const FilterPage = () => {
    const {filteredProducts} = useContext(mainContext)

    return (
        <div>
            <Filter/>
            <div className="d-flex wrap">
                {filteredProducts.map((x, i) => <SingleProduct item={x} key={i}/>)}
            </div>
        </div>
    );
};

export default FilterPage;