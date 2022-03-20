import React, {useContext, useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import mainContext from "../context/mainContext";


function Picker() {

    const {valueDateRange, onChange} = useContext(mainContext)

    return (
        <div>
            <DateRangePicker onChange={onChange} value={valueDateRange} />
        </div>
    );
}
export default Picker;