import React, { useEffect, useState } from "react";

export default function useScrollFraction(ref: React.RefObject<HTMLDivElement>) {
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

            if((window.scrollY - ref.current.offsetTop) < 0)
                return;

            if(window.scrollY - ref.current.offsetTop > (bounds.height))
                return;

            setFraction(((window.scrollY - ref.current.offsetTop) / bounds.height));
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return fraction;
};
