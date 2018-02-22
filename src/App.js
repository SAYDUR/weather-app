import React from "react";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather.js";

const API_KEY = "eb81a735e6d23752c461e65fbfeb6a42";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }


  weatherInfo = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (data.cod == 404) {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        icon: null,
        error: "Please make sure your inputs are valid."
      })
    } else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: null,
      });
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        icon: null,
        error: "Please make sure you enter correct values."
      });
    }
  }
  render() {
    return (
      <div>
        <Titles />
        <Form weatherInfo={this.weatherInfo} />
        <Weather
          {...this.state}
          // temperature={this.state.temperature}
          // city={this.state.city}
          // country={this.state.country}
          // humidity={this.state.humidity}
          // description={this.state.description}
          // icon={this.state.icon}
          // error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
