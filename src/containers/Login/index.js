import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import './styles.scss';

class LoginComponent extends Component{
  render(){
    return (
      <div className="app-login">
        Login Component
      </div>
    );
  }
}

export default hot(module)(LoginComponent);