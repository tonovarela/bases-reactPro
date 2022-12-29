import { CounterAction, acciones } from "../actions/actions"
import {  CounterState } from "../interfaces/interfaces"

export const CounterReducer = (state: CounterState, action: CounterAction): CounterState => {
    const {counter,changes} =state
    switch (action.type) {
        case acciones.increaseBy:
            return {                
                counter: counter + action.payload.value,
                previos: counter,
                changes: changes + 1
            }
        case acciones.reset:
            return {
                counter:0,
                previos: 0,
                changes: 0
            }
    }
}
