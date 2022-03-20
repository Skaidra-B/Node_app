import React, {useContext, useRef} from 'react';
import RangeSlider from "./PriceFilter";
import mainContext from "../context/mainContext";
import http from "../plugins/http";
import Picker from "./DateRangePicker";


const Filter = () => {
    const {value, setFilteredProducts, valueDateRange} = useContext(mainContext)
    const cityRef = useRef()

    async function sendFilterData() {
        const filterData = {
            city: cityRef.current.value,
            price: value,
            availability: valueDateRange
        }
        const data = await http.post(filterData, "/filter")
        console.log(data)
        setFilteredProducts(data.products)
    }

    return (
        <div className="d-flex">
            <input ref={cityRef} type="text" placeholder="city"/>
            <div>
                <div>Select price from 100 to 1000</div>
                <RangeSlider/>
            </div>
            <div>
                <div>Check availability</div>
                <Picker/>
            </div>
            <button onClick={sendFilterData}>Search</button>
        </div>
    );
};

export default Filter;