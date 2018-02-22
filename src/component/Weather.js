import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <br/>
        {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
        {this.props.city && this.props.country && <p>{this.props.temperature} &#8451;</p>}
        {this.props.city && this.props.country && <p>Humidity: {this.props.humidity} %</p>}
        {this.props.city && this.props.country && <p>{this.props.description.toUpperCase()}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};
export default Weather;
