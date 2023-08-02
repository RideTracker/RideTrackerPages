import React, { useRef, useEffect, useState } from "react";
import ScreenshotScroller, { ScreenshotScrollerSection } from "./screenshot/ScreenshotScroller";
import Container from "./Container";
import AnimatableLogo from "./AnimatableLogo";
import useVisibleFraction from "../modules/useVisibleFraction";
import { ScreenshotImage } from "./screenshot/ScreenshotImage";
import { ScreenshotCollection } from "./screenshot/ScreenshotCollection";

const sections: ScreenshotScrollerSection[] = [
    {
        alt: "Wearable",
        columns: [
            {
                images: [
                    {
                        alt: "Verifying login",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205214.png"
                    },

                    {
                        alt: "Not recording",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205238.png"
                    },

                    {
                        alt: "Calibrating",
                        source: "./images/screenshots/wearable/Screenshot_20230801_204305.png"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Recording, map",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205440.png"
                    },

                    {
                        alt: "Recording, stats",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205330.png"
                    },

                    {
                        alt: "Not recording, traffic",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205244.png"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Recording, stats, 2",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205936.png"
                    },

                    {
                        alt: "Recording, map, 2",
                        source: "./images/screenshots/wearable/Screenshot_20230801_204152.png"
                    },

                    {
                        alt: "Finished",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205946.png"
                    }
                ]
            }
        ]
    }
];

export default function WearableScroller() {
    const divRef = useRef<HTMLDivElement>(null);

    const fraction = useVisibleFraction(divRef, 1.25);
    
    console.log({ fraction });

    return (
        <div ref={divRef} className="scroller-container" style={{
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                pointerEvents: "none"
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, .25)",
                        
                        height: `75vh`,
                        width: "100%",

                        display: "flex",
                        alignItems: "center",

                        overflow: "hidden"
                    }}>
                        <div style={{
                            display: "flex",

                            justifyContent: "center",
                            alignItems: "center",

                            transform: "rotate(25deg)"
                        }}>
                            <ScreenshotCollection>
                                {[...sections].reverse().flatMap((section, index) => [ ...section.columns[0].images ].reverse().map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-1`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                            
                            <ScreenshotCollection>
                                {sections.flatMap((section, index) => section.columns[1].images.map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-2`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                            
                            <ScreenshotCollection>
                                {[...sections].reverse().flatMap((section, index) => [ ...section.columns[2].images ].reverse().map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-3`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: "60%",
                    
                    backgroundColor: "rgba(0, 0, 0, .15)",
                    
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    padding: "0 2.5vw",
                    boxSizing: "border-box"
                }}>
                    <h2 style={{
                        fontSize: "2.5vw",
                        color: "#BB87FC",
                        animationDelay: `-${fraction}s`
                    }} className="animated-wearable-title">
                        Record your rides on your Android Wear device!
                    </h2>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1em"
                    }}>
                        <div className="animated-wearable-content" style={{ flex: 1, animationDelay: `-${fraction}s` }}>
                            <h3>Going on a quick ride? Leave your phone at home!</h3>

                            <p>With the RideTracker app for Android Wear, you get the same features on your smart watch as you get on the RideTracker app for Android!</p>
                            <p>All you have to do is hit the record button and smash some records!</p>
                        </div>
                        
                        <div className="animated-wearable-content" style={{ flex: 1, animationDelay: `-${fraction}s` }}>
                            <h3>Keep track of your stats while remaining safe!</h3>

                            <p>Have an overview of the traffic in your area, your speed, accumulated distace, elevation gain, and much more without having to look at your phone!</p>
                            
                            <p style={{ color: "#BB87FC" }}>RideTracker for Android Wear is coming soon to the Play Store!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
