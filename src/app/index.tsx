import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import DeveloperContact from "../components/DeveloperContact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScreenshotScroller from "../components/ScreenshotScroller";

export default function IndexPage() {
    return (
        <div>
            <Header style={{
                display: "flex",

                justifyContent: "center",
                flexDirection: "column",

                height: "100vh"
            }}></Header>

            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{ position: "relative", width: "60vw", backgroundColor: "rgba(0, 0, 0, .1)" }}>
                    <div style={{ position: "sticky", top: 0, display: "inline-block" }}>
                        <h1>hello world</h1>
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <ScreenshotScroller/>
                </div>
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
