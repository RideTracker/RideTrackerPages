import React, { useEffect, useState } from "react";

export function getScrollFraction(ref: React.RefObject<HTMLDivElement>) {
    if(!ref.current)
        return 0;

    const bounds = ref.current.getBoundingClientRect();

    if((window.scrollY - ref.current.offsetTop) < 0)
        return 0;

    if(window.scrollY - ref.current.offsetTop > (bounds.height))
        return 0;

    return ((window.scrollY - ref.current.offsetTop) / bounds.height);
};

export default function useScrollFraction(ref: React.RefObject<HTMLDivElement>) {
    const [ fraction, setFraction ] = useState<number>(0);

    useEffect(() => {
        setFraction(getScrollFraction(ref));
    }, []);

    useEffect(() => {
        let timestamp = performance.now();

        const onScroll = () => {
            const now = performance.now();

            if(now - timestamp < 10)
                return;

            timestamp = now;

            setFraction(getScrollFraction(ref));
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return fraction;
};
