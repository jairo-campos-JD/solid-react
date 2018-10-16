import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import './styles.scss';

class DashboardComponent extends Component{
  render(){
    return (
      <div className="app-login">
        Dashboard Component
      </div>
    );
  }
}

export default hot(module)(DashboardComponent);