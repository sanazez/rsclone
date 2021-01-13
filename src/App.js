
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



const App = (props) => {
  return (
    <div className="wrapper">
      <Header dispatch={props.store.dispatch} state={props.state.headerElement} />
      <Main />
    </div>
  );
}

export default App;
