import { useState } from "react";

type Props = { initialValue?: number }

interface CounterState {
    counter: number;
    click: number;
}
export const CounterBy = ({ initialValue = 5 }: Props) => {
    const [{ counter, click }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        click: 0
    });
    const handledClick = (value: number) => {
        setCounterState(({ click, counter }) => ({
            counter: counter + value,
            click: click + 1
        })
        );
    };
    //const { counter, click } = counterState;
    return (
        <div>
            <h1>CounterBy :{counter}</h1>
            <h1>Clicks {click}</h1>
            <button onClick={() => { handledClick(1) }}>+1</button>
            <button onClick={() => { handledClick(5) }}>+5</button>
        </div>
    )
}