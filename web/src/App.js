import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/SignInForm'

class App extends Component {
  onSignIn = ({ email, password }) => {
    console.log('App received', { email ,password })
  }
  render() {
    return (
      <div className="App">
        <h1>Hunter</h1>
        <h2 className='mb-2'>
          Now delivering across Australia.
        </h2>
        <SignInForm
        onSignIn={ this.onSignIn }
        />
      </div>
    );
  }
}

export default App;
