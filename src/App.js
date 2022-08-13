import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       lat: null,
  //       errorMessage: "",
  //     };
  //   }
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <div>Loading....</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
