import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { CounterReducer } from "./state/counterReducer";
import { doReset, doIncreaseBy } from './actions/actions';

const INITIAL_STATE: CounterState = {
    counter: 0,
    previos: 0,
    changes: 0
}
export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE)
    const handledReset = () => {
        dispatch(doReset())
    }
    const increaseBy = (value:number) => {
        dispatch(doIncreaseBy(value))
    }
    return (
        <>
            <h1>
                Counter Reducer Component Segmentado:{state.counter}
            </h1>
            <button onClick={()=>{increaseBy(1)}}>+1</button>
            <button onClick={()=>{increaseBy(5)}}>+5</button>
            <button onClick={()=>{increaseBy(10)}}>+10</button>

            <button onClick={handledReset}>Reset</button>
            <pre>
                {JSON.stringify(state)}
            </pre>
        </>
 
 )
}