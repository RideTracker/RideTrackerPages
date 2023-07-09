import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function IndexPage() {
    return (
        <div>
            <div style={{
                backgroundColor: "#181821",
                backgroundImage: "url(/images/background4.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 20vh",
                backgroundSize: "cover",

                height: "80vh",
                width: "100%",

                padding: "5vh 0"
            }}>
                <header style={{
                    display: "grid",

                    height: "100%",
                    width: "100%",

                    gap: "2vh",

                    gridTemplateRows: "auto auto 1fr"
                }}>
                    <h1 style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}>
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
                    </h1>

                    <div style={{
                        display: "flex",

                        flexDirection: "column",

                        opacity: 0
                    }}>
                        <img src="/images/google-play-badge.png" alt="Google Play Store badge" style={{
                            height: "8vh",
                            margin: "0 auto"
                        }}/>
                    </div>

                    <div style={{
                        opacity: .95,

                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                left: "-8vw",
                                top: "1em",
                                height: "100%",

                                transform: "translateX(-50%) rotateZ(-10deg)"
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205751.jpg"}/>
                            </div>

                            <div style={{
                                position: "absolute",
                                left: "8vw",
                                top: "1em",
                                height: "100%",

                                transform: "translateX(-50%) rotateZ(10deg)"
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205957.jpg"}/>
                            </div>

                            <div style={{
                                position: "absolute",
                                left: 0,
                                height: "100%",

                                transform: "translateX(-50%)"
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205804.jpg"}/>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div style={{
                backgroundColor: "rgba(255, 255, 255, .05)"
            }}>
                <Container>
                    <h2>Currently in the works, follow me to see the progress:</h2>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1em"
                    }}>
                        <img alt="Nora Söderlund" src="/images/uploads/1678048199639.jpg" style={{
                            width: "6.5em",
                            height: "6.5em",

                            aspectRatio: 400 / 400,

                            background: "rgba(255, 255, 255, .05)",
                            
                            borderStyle: "solid",
                            borderWidth: 7,
                            borderRadius: "50%",
                            borderColor: "transparent",

                            boxShadow: "1px 3px 26px -4px rgba(0, 0, 0, .5)",
                            boxSizing: "border-box"
                        }}/>

                        <div>
                            <h2 style={{ marginTop: ".5em" }}>Nora Söderlund</h2>

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "2em"
                            }}>
                                <a href="https://nora-soderlund.se/" target="_blank" style={{
                                    display: "flex",
                                    gap: ".5em",
                                    alignItems: "center"
                                }}>
                                    <FontAwesomeIcon icon={faLink} fontSize={24}/>

                                    Website
                                </a>

                                <a href="https://www.linkedin.com/in/nora-soderlund/" target="_blank" style={{
                                    display: "flex",
                                    gap: ".5em",
                                    alignItems: "center"
                                }}>
                                    <FontAwesomeIcon icon={faLinkedin} fontSize={24}/>

                                    LinkedIn
                                </a>

                                <a href="https://github.com/nora-soderlund/" target="_blank" style={{
                                    display: "flex",
                                    gap: ".5em",
                                    alignItems: "center"
                                }}>
                                    <FontAwesomeIcon icon={faGithub} fontSize={24}/>

                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div style={{
                backgroundColor: "rgba(0, 0, 0, .1)"
            }}>
                <Container>
                    <div style={{
                        display: "flex",

                        justifyContent: "flex-end"
                    }} className="footer-links">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: ".5em"
                        }}>
                            <p style={{ color: "#BB87FC" }}>Links</p>

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
        </div>
    );
};
