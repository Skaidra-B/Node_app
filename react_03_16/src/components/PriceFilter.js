import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import mainContext from "../context/mainContext";
import {useContext} from "react";

function valuetext(value) {
    return {value};
}

export default function RangeSlider() {

    const {value, setValue} = useContext(mainContext)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => ''}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={100}
                max={1000}
                step={100}
            />
        </Box>
    );
}

