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
                        alt: "Recording, map",
                        source: "./images/avatars/avatar-4.png"
                    },

                    {
                        alt: "Not recording",
                        source: "./images/avatars/avatar-1.png"
                    },

                    {
                        alt: "Calibrating",
                        source: "./images/avatars/avatar-3.png"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Verifying login",
                        source: "./images/avatars/avatar-2.png"
                    },

                    {
                        alt: "Recording, stats",
                        source: "./images/avatars/avatar-9.png"
                    },

                    {
                        alt: "Not recording, traffic",
                        source: "./images/avatars/avatar-5.png"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Recording, stats, 2",
                        source: "./images/avatars/avatar-7.png"
                    },

                    {
                        alt: "Finished",
                        source: "./images/avatars/avatar-8.png"
                    },

                    {
                        alt: "Recording, map, 2",
                        source: "./images/avatars/avatar-6.png"
                    }
                ]
            }
        ]
    }
];

export default function IndexAvatars() {
    const divRef = useRef<HTMLDivElement>(null);

    const fraction = useVisibleFraction(divRef, 1.25);
    
    console.log({ fraction });

    return (
        <div ref={divRef} className="scroller-container" style={{
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
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
                        Be yourself, surrondered by people who share your interest!
                    </h2>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1em"
                    }}>
                        <div className="animated-wearable-content" style={{ flex: 1, animationDelay: `-${fraction}s` }}>
                            <h3>We are a community!</h3>

                            <p>Fitness and health related apps often overlook the obvious: the sport, the hobby, and the interest itself!</p>
                            <p>RideTracker aims to be a social platform for all cyclists to come together!</p>
                        </div>
                        
                        <div className="animated-wearable-content" style={{ flex: 1, animationDelay: `-${fraction}s` }}>
                            <h3>Make your own cyclist emoji!</h3>

                            <p>We have an exciting avatar editor where you can design your very own cyclist emoji with a wide range of options such as sunglasses, helmets, jerseys, and heads.</p>
                            
                            <p>You can even pick any color you want for any part of your cyclist emoji!</p>
                        </div>
                    </div>
                </div>

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

                            width: "100%",

                            transform: "rotate(25deg)"
                        }}>
                            <ScreenshotCollection>
                                {[...sections].flatMap((section, index) => [ ...section.columns[0].images ].map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-1`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                            
                            <ScreenshotCollection>
                                {sections.flatMap((section, index) => section.columns[1].images.map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-2`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                            
                            <ScreenshotCollection>
                                {[...sections].flatMap((section, index) => [ ...section.columns[2].images ].map((image) => (
                                    <ScreenshotImage className={`animated-wearable animated-wearable-column-3`} key={index + image.alt} source={image.source} alt={image.alt} style={{ animationDelay: `-${fraction}s`, borderRadius: "50%" }}/>
                                )))}
                            </ScreenshotCollection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
