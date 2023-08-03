import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import DeveloperContact from "../components/DeveloperContact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScreenshotScroller, { ScreenshotScrollerSection } from "../components/screenshot/ScreenshotScroller";
import IndexScroller from "../components/IndexScroller";
import IndexWatch from "../components/IndexWatch";
import IndexAvatars from "../components/IndexAvatars";

export default function IndexPage() {
    return (
        <React.Fragment>
            <IndexScroller/>
            
            <IndexWatch/>

            <IndexAvatars/>

<div style={{
    backgroundColor: "rgba(255, 255, 255, .05)"
}}>
    <Container>
        <h2>Currently in the works, follow me to see the progress:</h2>

        <DeveloperContact/>
    </Container>
</div>
        
            <Footer/>
        </React.Fragment>
    );
};
