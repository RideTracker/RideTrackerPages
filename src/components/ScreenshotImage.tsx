import React, { StyleHTMLAttributes } from "react";

export type ScreenshotImageProps = {
    image: string;
};

export default function ScreenshotImage({ image }: ScreenshotImageProps) {
    return (
        <div style={{
            height: "100%",
            width: "auto",

            display: "flex",

            borderStyle: "solid",
            borderRadius: 18,
            borderColor: "rgba(255, 255, 255, .05)",
            
            boxShadow: "1px 3px 26px -4px rgba(0, 0, 0, .5)",
            boxSizing: "border-box",

            aspectRatio: 1080 / 2134,
            
            overflow: "hidden"
        }}>
            <div style={{
                backgroundColor: "#222633",
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                flex: 1

            }}/>
        </div>
    );
};
