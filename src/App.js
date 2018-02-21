import React from "react";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather"
import Amazon from "./component/Amazon"

class App extends React.Component {
  render() {
    return(

      <div>

        <Titles />
        <Form />
        <Weather />
        <Amazon />

      </div>

    );
  }
};

export default App;
