import React, { useEffect, useState, useRef, useCallback } from "react";
import { ScreenshotCollection } from "./ScreenshotCollection";
import { ScreenshotImage } from "./ScreenshotImage";

export type ScreenshotScrollerSection = {
    alt: string;

    columns: {
        images: {
            alt: string;
            source: string;
        }[];
    }[];
};

export type ScreenshotScrollerProps = {
    sections: ScreenshotScrollerSection[];
    fraction: number;
    circle?: boolean;
    height?: number;
};

export default function ScreenshotScroller({ sections, fraction, circle, height = 100 }: ScreenshotScrollerProps) {
    return (
        <div style={{
            position: "sticky",
            top: 0,

            height: `${height}vh`,

            overflow: "hidden"
        }}>
            <div style={{
                transform: "rotateZ(25deg)",
                //transform: "rotate3d(.5, 0, .3, 45deg)",

                height: "100%",

                display: "flex",

                position: "relative",

                gap: "1em"
            }}>
                <ScreenshotCollection style={{ transform: `translateY(${fraction * 100}%)`, alignSelf: "flex-end" }}>
                    {[...sections].reverse().flatMap((section, index) => [ ...section.columns[0].images ].reverse().map((image) => (
                        <ScreenshotImage key={index + image.alt} source={image.source} alt={image.alt} style={(circle)?({ borderRadius: "50%" }):(undefined)}/>
                    )))}
                </ScreenshotCollection>
                
                <ScreenshotCollection style={{ transform: `translateY(-${fraction * 100}%)`, alignSelf: "flex-start" }}>
                    {sections.flatMap((section, index) => section.columns[1].images.map((image) => (
                        <ScreenshotImage key={index + image.alt} source={image.source} alt={image.alt} style={(circle)?({ borderRadius: "50%" }):(undefined)}/>
                    )))}
                </ScreenshotCollection>
                
                <ScreenshotCollection style={{ transform: `translateY(${fraction * 100}%)`, alignSelf: "flex-end" }}>
                    {[...sections].reverse().flatMap((section, index) => [ ...section.columns[2].images ].reverse().map((image) => (
                        <ScreenshotImage key={index + image.alt} source={image.source} alt={image.alt} style={(circle)?({ borderRadius: "50%" }):(undefined)}/>
                    )))}
                </ScreenshotCollection>
            </div>
        </div>
    );
};
