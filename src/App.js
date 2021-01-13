
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



const App = (props) => {
  return (
    <div className="wrapper">
      <Header dispatch={props.store.dispatch} state={props.state.headerElement} />
      <Main mainState={props.state.main}/>
    </div>
  );
}

export default App;
