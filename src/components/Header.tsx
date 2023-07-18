import React, { ReactNode } from "react";

export type HeaderProps = {
    children?: ReactNode;
    style?: React.HTMLAttributes<HTMLElement>["style"];
};

export default function Header({ children, style }: HeaderProps) {
    return (
        <header style={{
            width: "100%",
            height: "100%",

            ...style
        }}>
            <h1 style={{ margin: "0 auto", padding: "5vh 0" }}>
                <a href="/" style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <img alt="Ride Tracker" src="/images/logos/logo-white-cropped.png" style={{
                        maxWidth: "80vw",

                        width: "20em",

                        aspectRatio: 1733 / 234
                    }}/>

                    <svg viewBox="0 0 72 7" style={{
                        width: "20em",
                        maxWidth: "80vw"
                    }}>
                        <text x="0" y="4.6" fontSize={2.4} style={{
                            fill: "#FFF"
                        }}>
                            A social platform for cyclists to record, share, plan, and replay rides!
                        </text>
                    </svg>
                </a>
            </h1>

            {children}
        </header>
    );
};
