export enum acciones {
    increaseBy = 'incrementar',
    reset = "reset"
}


export type CounterAction =
    { type: acciones.increaseBy, payload: { value: number } }
    | { type: acciones.reset, };


export const doReset = (): CounterAction => ({ type: acciones.reset });
export const doIncreaseBy = (value: number): CounterAction => ({ type: acciones.increaseBy, payload: { value } });


