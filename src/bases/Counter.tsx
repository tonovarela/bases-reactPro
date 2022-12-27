import { useState } from "react";

//type Props = { initialValue:number}
interface Props {
    initialValue?:number;
}
export const Counter = ({initialValue=0}:Props) => {
    const [counter, setCounter] = useState(initialValue)
    const handledClick = () => {
        setCounter(prev=>prev+1)

    }
    return (
        <>
            <h1>
                Counter :{counter}
            </h1>
            <button onClick={handledClick}>+1</button>
        </>
    )
}