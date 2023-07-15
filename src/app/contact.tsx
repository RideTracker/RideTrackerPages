import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DeveloperContact from "../components/DeveloperContact";

export default function ContactPage() {
    return (
        <div>
            <Header style={{
                display: "flex",

                justifyContent: "center",
                flexDirection: "column"
            }}>

                <Container width={0.75}>
                    <h1>Contact</h1>
                    
                    <p>You can contact us through e-mail at <a href="mailto:contact@ridetracker.app">contact@ridetracker.app</a> for general inquiries and <a href="mailto:privacy@ridetracker.app">privacy@ridetracker.app</a> for privacy inquiries.</p>
                    
                    <p>You can also reach out to me directly through any of my listed links:</p>

                    <DeveloperContact/>
                </Container>
            </Header>

            <Footer/>
        </div>
    );
};
