import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

async function callAPI() {
  let data = await fetch("http://localhost:9000/testAPI?search=sanazez")
  data = await data.json()
  console.log(data)
}
callAPI();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// \"b8c14084-c347-4c2c-8ac5-f23391da711b\"