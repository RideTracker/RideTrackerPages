import React, { CSSProperties, ReactNode } from "react"

export type ContainerProps = {
    children: ReactNode;
    width?: number;
    style?: CSSProperties;
};

export default function Container({ children, width, style }: ContainerProps) {
    if(width === undefined)
        width = 1;

    return (        
        <div style={{
            width: `${Math.floor(width * 1100)}px`,
            maxWidth: "90vw",

            margin: "0 auto",
            padding: "2.5vh 0",

            ...style
        }}>
            {children}
        </div>
    );
};
