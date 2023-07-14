import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ChangelogPage() {
    return (
        <div>
            <Header style={{
                display: "flex",

                justifyContent: "center",
                flexDirection: "column"
            }}>

                <Container width={0.75}>
                    <h1>Changelog</h1>

                    <div id="introduction">
                        <h2>Version 0.9.0</h2>

                        <p>We have just released version 0.9.0 on the Google Play Store and it will gradually start showing up in the search results in the coming few days.</p>
                    
                        <p>We would like to emphatize that this is a public beta version and many features are still being worked on.</p>

                        <p>Regardless, this is a huge milestone and we're happy to have gotten this far and we will work on pushing out some of our unique features soon!</p>
                    </div>
                </Container>
            </Header>

            <Footer/>
        </div>
    );
};
