// import { Counter } from "./bases/Counter";
// import { CounterBy } from './bases/CounterBy';
// import { CounterEffect } from './bases/CounterEffect';

import { CounterReducerComponent } from "./counter-reducer/CounterReducer";




function App() {
  return (
    <>
    <h1>React</h1>
    <hr></hr>
    {/* <Counter initialValue={10} /> */}
    {/* <CounterBy initialValue={6}/> */}    
    <CounterReducerComponent></CounterReducerComponent>
    </>      
  );
}

export default App;
