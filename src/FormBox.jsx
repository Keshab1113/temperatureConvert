import React from 'react';
import MainForm from './MainForm';

class FormBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scale: "",
            temperature: "",
        };
    }
    toCelsius = (fahrenheit) => {
        return ((fahrenheit-32)*5)/9;
    }
    toFahrenheit = (celsius) => {
        return (celsius*9)/5+32;
    }
    onCelChange = (value) =>{
        let temp= value == ""? 0 :value;
 this.setState({scale:"c",temperature:parseFloat(temp)});
    }
    onFehChange = (value) =>{
        let temp= value == ""? 0 :value;
        this.setState({scale:"f",temperature:parseFloat(value)});
    }
    render(){
    const celsius = this.state.scale == "f" ?this.toCelsius(this.state.temperature): this.state.temperature;
    const fahrenheit = this.state.scale == "c" ?this.toFahrenheit(this.state.temperature): this.state.temperature;
    
    return(
        <>
            <MainForm scale={"c"} temperature={celsius} onTempChange={this.onCelChange}/>
            <MainForm scale={"f"} temperature={fahrenheit} onTempChange={this.onFehChange}/>
            
            {/* <button className='button'>Clear All</button> */}
        </>
    );
    }
}
export default FormBox;