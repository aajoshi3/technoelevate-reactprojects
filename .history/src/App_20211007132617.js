import './App.css';
import ComponentC from './Components/ComponentC';
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
    const [state, dispatch] = useReducer(reducer, initialState)
 
  return (
    <CountProvider value={{state:state,dispatch:dispatch}}>
      
    <div className="App">
      <ComponentC/>
      <button onClick={()=>{
        dispatch('increment')
      }}>Increment</button>
       <DataFetchingTwo/>
    </div>
    </CountProvider>
  );
}

export default App;
