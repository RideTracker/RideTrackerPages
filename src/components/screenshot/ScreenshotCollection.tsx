import React from "react";

export type ScreenshotCollectionProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export function ScreenshotCollection({ style, children }: ScreenshotCollectionProps) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",

            flex: 1,
        
            gap: "1em",

            position: "relative",

            height: "max-content",

            ...style
        }}>
            {children}
        </div>
    );
};
