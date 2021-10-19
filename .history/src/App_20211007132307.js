import './App.css';
// import route from './Components/Link';
import DataFetchingTwo from './Components/DataFetchingOne'


  const initialState=0;
  const reducer=(prevState,action)=>{
    switch (action){
      case 'increment':
        return prevState+10;
        case 'decrement':
          return prevState-10;
          case 'reset':
          return initialState;
          default :prevState; 
    }
  }
  function App() {
 
  return (
    <div className="App">
       <DataFetchingTwo/>
    </div>
  );
}

export default App;
