import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (
  (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) ||
  (document.referrer.indexOf("https://yingying-feng.com/") >= 0)
) {
  console.log('hey there!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

