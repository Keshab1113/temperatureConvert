import React from 'react';
const scaleNames = {
    c: "Celsius (°C)",
    f: "Fahrenheit (°F)",
}
function MainForm({scale,temperature,onTempChange}){
    const onChangeHandel = (event) =>{
        onTempChange(event.target.value);
    }
    return(
        <>
            <form>
            <h2>{scaleNames[scale]}</h2>
                <input className='InputBox' type='text' placeholder='Enter Your Temperature' value={temperature} onChange={onChangeHandel}/>
            </form>
        </>
    );
}
export default MainForm;