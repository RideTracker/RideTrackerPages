import React, { useEffect, useState } from "react";

export function getVisibleFraction(ref: React.RefObject<HTMLDivElement>, scale: number = 1) {
    if(!ref.current)
        return 0;

    const bounds = ref.current.getBoundingClientRect();

    const height = bounds.height * scale;

    if(window.scrollY < ref.current.offsetTop - window.innerHeight)
        return 0;

    if(window.scrollY > ref.current.offsetTop + height)
        return 0;

    const visibleHeight = Math.min(window.innerHeight - (ref.current.offsetTop - window.scrollY), height);

    return visibleHeight / height;
};

export default function useVisibleFraction(ref: React.RefObject<HTMLDivElement>, scale: number = 1) {
    const [ fraction, setFraction ] = useState<number>(0);

    useEffect(() => {
        const fraction = getVisibleFraction(ref, scale);

        setFraction(fraction);
    }, []);

    useEffect(() => {
        let timestamp = performance.now();

        const onScroll = () => {
            const now = performance.now();

            if(now - timestamp < 10)
                return;

            timestamp = now;

            const fraction = getVisibleFraction(ref, scale);

            setFraction(fraction);

            //setFraction(((window.scrollY - ref.current.offsetTop) / bounds.height));
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return fraction;
};
