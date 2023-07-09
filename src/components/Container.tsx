import React, { ReactNode } from "react"

export type ContainerProps = {
    children: ReactNode;
    width?: number;
};

export default function Container({ children, width }: ContainerProps) {
    if(width === undefined)
        width = 1;

    return (        
        <div style={{
            width: `${Math.floor(width * 1100)}px`,
            maxWidth: "80vw",

            margin: "0 auto",
            padding: "2.5vh 0"
        }}>
            {children}
        </div>
    );
};
