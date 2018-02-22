import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherInfo}>
        <p>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country" />
        </p>
        <p><button>Get Weather Info</button></p>
      </form>
    );
  }
};

export default Form;
