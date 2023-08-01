import React from "react";
import Container from "./Container";

export default function Footer() {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, .1)"
        }}>
            <Container>
                <div style={{
                    display: "flex",

                    justifyContent: "flex-end",
                    gap: "1em"
                }} className="footer-links">
                    <div style={{ margin: "auto auto auto 0" }}>
                        <a href="https://play.google.com/store/apps/details?id=com.norasoderlund.ridetrackerapp" target="_blank">
                            <img src="/images/google-play-badge.png" alt="Google Play Store badge" style={{
                                height: "8vh"
                            }}/>
                        </a>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5em",
                        minWidth: "20%"
                    }}>
                        <p style={{ color: "#BB87FC" }}>Stores</p>

                        <a href="https://play.google.com/store/apps/details?id=com.norasoderlund.ridetrackerapp" target="_blank">Google Play</a>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5em"
                    }}>
                        <p style={{ color: "#BB87FC" }}>About</p>

                        <a href="/contact">Contact</a>
                        <a href="/changelog">Changelog</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>

                <div style={{
                    height: "2px",
                    width: "100%",

                    backgroundColor: "#BB87FC",

                    margin: "3vh 0"
                }}/>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }} className="footer">
                    <div>
                        <img alt="Ride Tracker" src="/images/logos/logo-white-cropped.png" style={{
                            maxWidth: "80vw",

                            width: "20em",

                            aspectRatio: 1733 / 234
                        }}/>
                    </div>

                    <div style={{
                        margin: "auto 0"
                    }}>
                        <small>Google Play and the Google Play logo are trademarks of Google LLC.</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};
