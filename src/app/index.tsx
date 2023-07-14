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
                    
                    gridTemplateRows: "auto 1fr auto"
                }}>
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

                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <a href="https://play.google.com/store/apps/details?id=com.norasoderlund.ridetrackerapp" target="_blank">
                            <img src="/images/google-play-badge.png" alt="Google Play Store badge" style={{
                                height: "8vh"
                            }}/>
                        </a>
                    </div>
                </Header>
            </div>

            <DeveloperContact/>

            <Footer/>
        </div>
    );
};
