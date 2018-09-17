import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
     return (
        <div>
           <Header/>
           <Time/>
           <Button/>
        </div>
     );
  }
}

class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Welcome!</h1>
        </div>
     );
  }
}

class Time extends React.Component {
  render() {
      return (
              <div>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </div>
            );
          }
      }

class Button extends React.Component {
  render() {
      return (
          <div>
           <button>Like</button>
           </div>
      );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;