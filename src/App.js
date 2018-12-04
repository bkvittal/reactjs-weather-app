import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// openweathermap.org api key
const weather_api_key = 'c34ca70c483ff131f2c9ddbf00b3cc0e';

// setting state / data for the app as fetched from openweathermap.org api 
class App extends React.Component{
    state = {
        city: undefined,
        country: undefined,
        humidity: undefined,
        temperature: undefined,
        conditions: undefined,
        error: undefined
    }
    
    getWeather = async (e) => {        
        e.preventDefault();
        
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.log(city + country);
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weather_api_key}&units=metric`);   
        const data = await api_call.json();  
        console.log(data);      
        if(city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "",
            });
        }else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter City & Country",
            });
        }
    }
    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                            <div className="col-xs-5 title-container">
                            <Titles/>                            
                            </div>
                            <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather}/>
                            <Weather
                            city={this.state.city}
                            country={this.state.country}
                            temperature={this.state.temperature}
                            description={this.state.description}
                            humidity={this.state.humidity}
                            error={this.state.error}
                            /> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
};

export default App;