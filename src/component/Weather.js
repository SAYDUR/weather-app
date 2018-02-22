import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city && this.props.country && <p className="weather__key">Location: <span className="weather__value">{this.props.city}, {this.props.country}</span></p>}
        {this.props.city && this.props.country && <p className="weather__key">Temperature: <span className="weather__value">{this.props.temperature}</span> &#8451;</p>}
        {this.props.city && this.props.country && <p className="weather__key">Humidity: <span className="weather__value">{this.props.humidity}</span> %</p>}
        {this.props.city && this.props.country && <p className="weather__key">Discription: <span className="weather__value">{this.props.description.toUpperCase()}</span></p>}
        {this.props.error && <p className="weather__key">Error: <span className="weather__error">{this.props.error}</span></p>}
      </div>
    );
  }
};
export default Weather;
