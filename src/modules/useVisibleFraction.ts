import React, { useEffect, useState } from "react";

export default function useVisibleFraction(ref: React.RefObject<HTMLDivElement>, scale: number = 1) {
    const [ fraction, setFraction ] = useState<number>(0);

    useEffect(() => {
        let timestamp = performance.now();

        const onScroll = () => {
            if(!ref.current)
                return;

            const now = performance.now();

            if(now - timestamp < 10)
                return;

            timestamp = now;

            const bounds = ref.current.getBoundingClientRect();

            const height = bounds.height * scale;

            if(window.scrollY < ref.current.offsetTop - window.innerHeight)
                return;

            if(window.scrollY > ref.current.offsetTop + height)
                return;

            const visibleHeight = Math.min(window.innerHeight - (ref.current.offsetTop - window.scrollY), height);

            setFraction(visibleHeight / height);

            //setFraction(((window.scrollY - ref.current.offsetTop) / bounds.height));
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return fraction;
};
