import React, { Component } from 'react';
import mongodbLogo from './mongodb.png';
import nodejsLogo from './node-js.png';
import expressLogo from './express.png';
import reactLogo from './react.png';
import htmlLogo from './html.png';
import herokuLogo from './heroku.png';
import css3Logo from './css3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={htmlLogo} alt='' />
        <img src={reactLogo} alt=''/>
        <img src={herokuLogo} alt=''/>
        <img src={nodejsLogo} alt=''/>
        <img src={mongodbLogo} alt=''/>
        <img src={expressLogo} alt=''/>
        <img src={css3Logo} alt=''/>
          <div className='name'>
            <h1>Benedict Ng-Wai</h1>
              <div className='title'>
                <p>Web Developer</p>
                  <div className='headers'>
                    <p>about projects contact</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
