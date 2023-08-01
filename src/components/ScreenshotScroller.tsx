import React, { useEffect, useState, useRef, useCallback } from "react";

export type ScreenshotImageProps = {
    source: string;
};

export function ScreenshotImage({ source }: ScreenshotImageProps) {
    return (
        <div>
            <img src={source} style={{
                width: "100%"
            }}/>
        </div>
    );
};

export type ScreenshotCollectionProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export function ScreenshotCollection({ style, children }: ScreenshotCollectionProps) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        
            gap: "5vh",

            position: "relative",

            height: "max-content",

            ...style
        }}>
            {children}
        </div>
    );
};

export default function ScreenshotScroller() {
    const divRef = useRef<HTMLDivElement>(null);

    const [ fraction, setFraction ] = useState<number>(0);

    useEffect(() => {
        const onScroll = (event: Event) => {
            if(!divRef.current)
                return;

            const bounds = divRef.current.getBoundingClientRect();

            if((window.scrollY - divRef.current.offsetTop) < 0)
                return;
            
            if(window.scrollY > bounds.height)
                return;

            setFraction((window.scrollY - divRef.current.offsetTop) / bounds.height);
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <div ref={divRef} style={{
            backgroundColor: "rgba(0, 0, 0, .25)",
            
            height: "200vh",
            width: "100%"
        }}>
            <div style={{
                position: "sticky",
                top: 0,

                height: "100vh",

                overflow: "hidden"
            }}>
                <div style={{
                   transform: "rotateZ(25deg)",

                   height: "100%",

                   display: "flex",
                   flexDirection: "row",
                   justifyContent: "space-evenly",

                   position: "relative",
   
                   gap: "5vh"
                }}>
                    <ScreenshotCollection style={{ transform: `translateY(${fraction * 100}%)`, alignSelf: "flex-end" }}>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231055_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231058_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231831_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231058_Expo Go.jpg"/>
                    </ScreenshotCollection>
                    
                    <ScreenshotCollection style={{ transform: `translateY(-${fraction * 100}%)` }}>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231615_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231031_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231307_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231031_Expo Go.jpg"/>
                    </ScreenshotCollection>
                    
                    <ScreenshotCollection style={{ transform: `translateY(${fraction * 100}%)`, alignSelf: "flex-end" }}>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231307_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_232031_RideTracker.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_231322_Expo Go.jpg"/>
                        <ScreenshotImage source="./images/screenshots/Screenshot_20230731_232031_RideTracker.jpg"/>
                    </ScreenshotCollection>
                </div>
            </div>
        </div>
    );
};
