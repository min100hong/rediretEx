import React, { Component } from 'react';

export class About extends Component {
  render() {
    const { location } =this.props;
    console.log(location);
    return (
      <div>
        <h2>About</h2>
        <h2>{location.state.category}</h2>
        <h2>{location.state.project}</h2>
        <h2>{location.state.provider}</h2>
      </div>
    )
  }
}

export default About;
