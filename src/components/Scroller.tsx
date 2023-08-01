import React, { useRef, useEffect, useState } from "react";
import ScreenshotScroller, { ScreenshotScrollerSection } from "./screenshot/ScreenshotScroller";
import Container from "./Container";
import AnimatableLogo from "./AnimatableLogo";

export type ScrollerProps = {
    sections: ScreenshotScrollerSection[];
};

export default function Scroller({ sections }: ScrollerProps) {
    const divRef = useRef<HTMLDivElement>(null);

    const [ fraction, setFraction ] = useState<number>(0);

    useEffect(() => {
        const onScroll = () => {
            if(!divRef.current)
                return;

            const bounds = divRef.current.getBoundingClientRect();

            if((window.scrollY - divRef.current.offsetTop) < 0)
                return;
            
            if(window.scrollY >  bounds.height - window.screen.height)
                return;

            console.log({ scrollY: window.scrollY, height: bounds.height - window.screen.height });

            setFraction(Math.max(0, Math.min(1, (window.scrollY - divRef.current.offsetTop) / bounds.height)));
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div ref={divRef} className="scroller-container" style={{
            width: "100%",

            position: "relative"
        }}>
            <div className="scroller-intro" style={{
                position: "absolute",

                left: 0,
                top: 0,

                width: "100%",
                height: "100%"
            }}>
                <div style={{
                    position: "sticky",

                    left: 0,
                    top: 0,

                    width: "100%",
                    height: "100vh",

                    display: "flex",
                    alignItems: "center"
                }}>
                    <Container style={{ alignItems: "center" }}>
                        <AnimatableLogo/>
                    </Container>
                </div>
            </div>

            <div className="scroller-content" style={{
                display: "flex",
                flexDirection: "row",
                pointerEvents: "none"
            }}>
                <div style={{ position: "relative", width: "60%", backgroundColor: "rgba(0, 0, 0, .1)" }}>
                    <div style={{ position: "sticky", top: 0, display: "inline-block", width: "100%" }}>
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, .25)",
                        
                        height: `${sections.map((section) => section.columns[0].images.length).reduce((accumulated, current) => accumulated + current, 0) * 100}vh`,
                        width: "100%"
                    }}>
                        <ScreenshotScroller sections={sections} fraction={fraction}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
