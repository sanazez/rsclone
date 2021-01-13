import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// rerender();

async function callAPI() {
  let data = await fetch("http://localhost:9000/testAPI");
  data = await data.json();
  console.log(data);
  state.main = data;
  await rerender();
}
callAPI();


rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


