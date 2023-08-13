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
        <div className={`screenshot-image ${className}`} style={style}>
            <img alt={alt} src={source} className={`screenshot-image-content ${(imageLoaded)?("fade-and-blur-in"):("")}`} onLoad={() => setImageLoaded(true)}/>
        </div>
    );
};
