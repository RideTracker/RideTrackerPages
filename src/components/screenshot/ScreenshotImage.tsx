import React, { useState, CSSProperties } from "react";

export type ScreenshotImageProps = {
    alt: string;
    source: string;
    onLoad?: () => void;

    className?: string;
    style?: CSSProperties;
};

export function ScreenshotImage({ alt, source, style, className }: ScreenshotImageProps) {
    const [ imageLoaded, setImageLoaded ] = useState<boolean>(false);

    return (
        <div className={className} style={{
            borderStyle: "solid",
            borderWidth: "1em",
            borderColor: "rgba(0, 0, 0, .2)",
            borderRadius: "3em",

            background: "#171A23",

            overflow: "hidden",
            ...style
        }}>
            <img alt={alt} src={source} className={(imageLoaded)?("fade-and-blur-in"):(undefined)} onLoad={() => setImageLoaded(true)} style={{
                opacity: 0,

                width: "100%"
            }}/>
        </div>
    );
};
