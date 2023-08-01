import React, { useState } from "react";

export type ScreenshotImageProps = {
    alt: string;
    source: string;
    onLoad?: () => void;
};

export function ScreenshotImage({ alt, source }: ScreenshotImageProps) {
    const [ imageLoaded, setImageLoaded ] = useState<boolean>(false);

    return (
        <div style={{
            borderStyle: "solid",
            borderWidth: "1em",
            borderColor: "rgba(0, 0, 0, .2)",
            borderRadius: "3em",

            background: "#171A23",

            overflow: "hidden"
        }}>
            <img alt={alt} src={source} className={(imageLoaded)?("fade-and-blur-in"):(undefined)} onLoad={() => setImageLoaded(true)} style={{
                opacity: 0,

                width: "100%"
            }}/>
        </div>
    );
};
