
import { useCounter } from "../hooks/useCounter";
export const CounterEffect = () => {    
    const {counter,elementToAnimate,handledClick} = useCounter({maxCount:20});
    return (
        <>
            <h1>
                CounterEffect :{counter}
            </h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={handledClick}>+1</button>
        </>
    )
}