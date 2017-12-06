import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/SignInForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hunter</h1>
        <h2 className='mb-2'>
          Now delivering across Australia.
        </h2>
        <SignInForm
        />
      </div>
    );
  }
}

export default App;
