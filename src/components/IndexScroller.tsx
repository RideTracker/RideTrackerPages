import React, { useRef, useEffect, useState } from "react";
import ScreenshotScroller, { ScreenshotScrollerSection } from "./screenshot/ScreenshotScroller";
import Container from "./Container";
import AnimatableLogo from "./AnimatableLogo";
import useScrollFraction from "../modules/useScrollFraction";

const sections: ScreenshotScrollerSection[] = [
    {
        alt: "Social aspect",
        columns: [
            {
                images: [
                    {
                        alt: "Index page",
                        source: "./images/screenshots/Screenshot_20230731_231055_Expo Go.jpg"
                    },

                    {
                        alt: "Profile activities",
                        source: "./images/screenshots/Screenshot_20230731_232028_RideTracker.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Record page",
                        source: "./images/screenshots/Screenshot_20230731_231615_Expo Go.jpg"
                    },

                    {
                        alt: "Feed page",
                        source: "./images/screenshots/Screenshot_20230731_230927_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Activity page",
                        source: "./images/screenshots/Screenshot_20230731_232037_RideTracker.jpg"
                    },

                    {
                        alt: "Activity insights",
                        source: "./images/screenshots/Screenshot_20230731_231013_Expo Go.jpg"
                    }
                ]
            }
        ]
    },

    {
        alt: "Routes",
        columns: [
            {
                images: [
                    {
                        alt: "My routes",
                        source: "./images/screenshots/Screenshot_20230731_231331_Expo Go.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Route drawing 2",
                        source: "./images/screenshots/Screenshot_20230731_231336_Expo Go.jpg"
                    },

                    {
                        alt: "Global routes",
                        source: "./images/screenshots/Screenshot_20230731_231307_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Finish recording",
                        source: "./images/screenshots/Screenshot_20230731_231625_Expo Go.jpg"
                    }
                ]
            }
        ]
    },

    /*{
        alt: "Avatar editor",
        columns: [
            {
                images: [
                    {
                        alt: "Jerseys",
                        source: "./images/screenshots/Screenshot_20230731_231831_Expo Go.jpg"
                    },

                    {
                        alt: "Jerseys 2",
                        source: "./images/screenshots/Screenshot_20230731_231913_Expo Go.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Glasses",
                        source: "./images/screenshots/Screenshot_20230731_231918_Expo Go.jpg"
                    },

                    {
                        alt: "Heads",
                        source: "./images/screenshots/Screenshot_20230731_231858_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Heads 2",
                        source: "./images/screenshots/Screenshot_20230731_231855_Expo Go.jpg"
                    },

                    {
                        alt: "Helmets",
                        source: "./images/screenshots/Screenshot_20230731_231909_Expo Go.jpg"
                    }
                ]
            }
        ]
    }*/
];

export default function IndexScroller() {
    const divRef = useRef<HTMLDivElement>(null);
    
    const fraction = useScrollFraction(divRef);

    return (
        <div ref={divRef} className="scroller-container" style={{
            width: "100%",

            position: "relative"
        }}>
            <div className="scroller-content" style={{
                display: "flex",
                flexDirection: "row",
                pointerEvents: "none"
            }}>
                <div style={{ position: "relative", width: "60%", backgroundColor: "rgba(0, 0, 0, .1)" }}>
                    <div style={{
                        position: "sticky",
                        top: 0,
                        
                        width: "100%",
                        height: "100vh",

                        display: "flex",

                        justifyContent: "center",
                        alignItems: "center",

                        flexDirection: "column"
                    }}>
                        <AnimatableLogo styles={{
                            width: "30vw"
                        }}/>
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
