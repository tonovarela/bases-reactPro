import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({maxCount=0 })=>{
    const [counter, setCounter] = useState(8)
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());    
    const handledClick = () => {
        setCounter(prev => Math.min(prev + 1,maxCount ))
    }

    useLayoutEffect(()=>{
        if (!elementToAnimate.current) return;
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                 .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
           .pause();   
    },[])
    useEffect(() => {
        if (counter<maxCount) return;
        tl.current.play(0);        
    }, [counter]);

    return {
        counter,
        setCounter,
        elementToAnimate,
        handledClick,
    }
}