import React from "react";

export type ScreenshotCollectionProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export function ScreenshotCollection({ style, children }: ScreenshotCollectionProps) {
    return (
        <div className="screenshot-collection" style={style}>
            {children}
        </div>
    );
};
