import React, { useRef, useEffect, useState } from "react";
import ScreenshotScroller, { ScreenshotScrollerSection } from "./screenshot/ScreenshotScroller";
import Container from "./Container";
import AnimatableLogo from "./AnimatableLogo";

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
                        alt: "Not recording, traffic",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205244.png"
                    },

                    {
                        alt: "Recording, stats",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205330.png"
                    },

                    {
                        alt: "Recording, map",
                        source: "./images/screenshots/wearable/Screenshot_20230801_205440.png"
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
    return (
        <div className="scroller-container" style={{
            width: "100%",

            position: "relative"
        }}>
            <div className="scroller-content" style={{
                display: "flex",
                flexDirection: "row",
                pointerEvents: "none"
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, .25)",
                        
                        height: `75vh`,
                        width: "100%",

                        overflow: "hidden"
                    }}>
                        <ScreenshotScroller height={75} sections={sections} fraction={0} circle={true}/>
                    </div>
                </div>

                <div style={{ position: "relative", width: "60%", backgroundColor: "rgba(0, 0, 0, .15)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{
                        textTransform: "uppercase",
                        fontSize: "4em",
                        transform: "rotate(25deg)"
                    }}>
                        Coming soon!
                    </h2>
                </div>
            </div>
        </div>
    );
};
