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

                    {/*<div id="version-0.9.3">
                        <a href="#version-0.9.3"><h2>Version 0.9.3 (under development)</h2></a>

                        <p>Under development, below is the <i>finished</i> changes to date.</p>

                        <ul>
                            <li>Fixed app name (ridetrackerapp &gt; RideTracker).</li>
                        </ul>
                    </div>*/}

                    <div id="version-0.9.2">
                        <a href="#version-0.9.2"><h2>Version 0.9.2</h2></a>

                        <p>Released 18th of July, 2023.</p>

                        <ul>
                            <li>Fixed app name (ridetrackerapp &gt; RideTracker).</li>
                            <li>Added a prominent notice for when updates are available.</li>
                            <li>Added redirection to the avatar editor after registration.</li>
                            <li>Added ability to comment on activities.</li>
                            <li>Added ability to delete authored comments.</li>
                            <li>Updated activities list on profiles.</li>
                            <li>Added followers and following tabs to user profile.</li>
                            <li>Added route browser, waypoints, and drawing functionality. *</li>
                        </ul>

                        <small>* subscription based feature which won't be available until after the beta period.</small>
                    </div>

                    <div id="version-0.9.1">
                        <a href="#version-0.9.1"><h2>Version 0.9.1</h2></a>

                        <p>Released 16th of July, 2023.</p>

                        <ul>
                            <li>Updated the prominent location permissions disclosure page.</li>
                            <li>Fixed bug causing the feed to be shown before a user is authenticated.</li>
                            <li>Added the ability to delete authored activities.</li>
                            <li>Added activity visibility option to the upload page.</li>
                            <li>Added the ability to edit authored activities.</li>
                            <li>Added bike type images as default bike images and icons.</li>
                            <li>Added bike model type and visibility to activity maps.</li>
                            <li>Added route drawing mechanism with Google Maps linking. {"*"}</li>
                        </ul>

                        <small>* subscription based feature which won't be available until after the beta period.</small>
                    </div>

                    <div id="version-0.9.0">
                        <a href="#version-0.9.0"><h2>Version 0.9.0</h2></a>
                    
                        <p>Released 13th of July, 2023.</p>

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
