import { useReducer } from "react";

interface CounterState {
    counter: number;
    previos: number;
    changes: number;
}
const INITIAL_STATE: CounterState = {
    counter: 0,
    previos: 0,
    changes: 0
}

type CounterAction =
    { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset', };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    const {counter,changes} =state
    switch (action.type) {
        case "increaseBy":
            return {                
                counter: counter + action.payload.value,
                previos: counter,
                changes: changes + 1
            }
        case "reset":
            return {
                ...INITIAL_STATE,
            }
    }
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
    const handledReset = () => {
        dispatch({ type: 'reset' })
    }
    const increaseBy = (value:number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }
    return (
        <>
            <h1>
                Counter Reducer Component:{state.counter}
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