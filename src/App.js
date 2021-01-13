
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



const App = (props) => {
  return (
    <div className="wrapper">
      <Header headreState={props.state.header} updateSearchText={props.updateSearchText} onSearchInfo={props.onSearchInfo} />
      <Main mainState={props.state.main}/>
    </div>
  );
}

export default App;
