import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import DeveloperContact from "../components/DeveloperContact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function IndexPage() {
    return (
        <div>
            <div style={{
                backgroundColor: "#191923",
                backgroundImage: "url(/images/background4.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                backgroundSize: "cover",

                height: "80vh",
                width: "100%"
            }}>
                <Header style={{
                    display: "grid",
                    
                    gridTemplateRows: "auto 1fr",

                    position: "relative"
                }}>
                    <div style={{
                        opacity: .95,

                        marginBottom: "5vh",

                        display: "flex",
                        justifyContent: "center",

                        position: "relative"
                    }}>
                        <div style={{
                            position: "absolute",

                            height: "100%",

                            left: "50%",
                            transform: "translateX(-50%)"
                        }}>
                            <div style={{
                                position: "absolute",
                                left: "-8vw",
                                top: "1em",
                                height: "100%",

                                transform: "rotateZ(-10deg)",
                                zIndex: 1
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205751.jpg"}/>
                            </div>

                            <div style={{
                                position: "absolute",
                                left: "8vw",
                                top: "1em",
                                height: "100%",

                                transform: "rotateZ(10deg)",
                                zIndex: 2
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205957.jpg"}/>
                            </div>

                            <div style={{
                                height: "100%",
                                position: "relative",
                                zIndex: 3
                            }}>
                                <ScreenshotImage image={"/images/2023/0.9.0/Screenshot_20230706_205804.jpg"}/>
                            </div>
                        </div>
                    </div>
                </Header>

                <Container style={{ padding: "0", display: "flex", transform: "translateY(-100%)" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.norasoderlund.ridetrackerapp" target="_blank" style={{ marginLeft: "auto" }}>
                        <img src="/images/google-play-badge.png" alt="Google Play Store badge" style={{
                            height: "8vh"
                        }}/>
                    </a>
                </Container>
            </div>

            <div style={{
                backgroundColor: "rgba(255, 255, 255, .05)"
            }}>
                <Container>
                    <h2>Currently in the works, follow me to see the progress:</h2>

                    <DeveloperContact/>
                </Container>
            </div>
        
            <Footer/>
        </div>
    );
};
