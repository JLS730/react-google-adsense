import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import NavigationBar from './components/NavigationBar';

const Website = () => {
  return (
    <NavigationBar />
  )
}

ReactDOM.render(<Website />, document.getElementById('root'))