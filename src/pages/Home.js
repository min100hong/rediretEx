import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const location = {
  pathname: '/about',
  state: { 
    project: 'ProjectA',
    provider: '민백홍',
    category: 'dssrc'
   }
}
export class Home extends Component {
  state = {
    redirect: false,
    project: '',
    provider: '',
    category: '',    
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
      // project: 'Porj',
      // provider: 'Prov',
      // category: 'AAA'
    })
    // }, () => this.renderRedirect())
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect
      to={location}
    />
    }
  }

  render() {
    return (
      <div>
        <h2>홈</h2>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    )
  }
}

export default Home;
