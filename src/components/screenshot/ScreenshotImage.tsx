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
            borderWidth: ".5em",
            borderColor: "rgba(0, 0, 0, .25)",
            borderRadius: "1.5em",

            background: "#171A23",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            overflow: "hidden",
            ...style
        }}>
            <img alt={alt} src={source} className={(imageLoaded)?("fade-and-blur-in"):(undefined)} onLoad={() => setImageLoaded(true)} style={{
                opacity: 0,

                width: "100%",
                height: "100%",

                objectFit: "contain"
            }}/>
        </div>
    );
};
