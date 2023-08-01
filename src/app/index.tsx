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
import Scroller from "../components/Scroller";

const sections: ScreenshotScrollerSection[] = [
    {
        alt: "Social aspect",
        columns: [
            {
                images: [
                    {
                        alt: "Index page",
                        source: "./images/screenshots/Screenshot_20230731_231055_Expo Go.jpg"
                    },

                    {
                        alt: "Profile activities",
                        source: "./images/screenshots/Screenshot_20230731_232028_RideTracker.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Record page",
                        source: "./images/screenshots/Screenshot_20230731_231615_Expo Go.jpg"
                    },

                    {
                        alt: "Feed page",
                        source: "./images/screenshots/Screenshot_20230731_230927_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Activity page",
                        source: "./images/screenshots/Screenshot_20230731_232037_RideTracker.jpg"
                    },

                    {
                        alt: "Activity insights",
                        source: "./images/screenshots/Screenshot_20230731_231013_Expo Go.jpg"
                    }
                ]
            }
        ]
    },

    {
        alt: "Routes",
        columns: [
            {
                images: [
                    {
                        alt: "My routes",
                        source: "./images/screenshots/Screenshot_20230731_231331_Expo Go.jpg"
                    },

                    {
                        alt: "Route drawing",
                        source: "./images/screenshots/Screenshot_20230731_231322_Expo Go.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Route drawing 2",
                        source: "./images/screenshots/Screenshot_20230731_231336_Expo Go.jpg"
                    },

                    {
                        alt: "Global routes",
                        source: "./images/screenshots/Screenshot_20230731_231307_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Finish recording",
                        source: "./images/screenshots/Screenshot_20230731_231625_Expo Go.jpg"
                    },

                    {
                        alt: "Avatar editor head",
                        source: "./images/screenshots/Screenshot_20230731_231844_Expo Go.jpg"
                    }
                ]
            }
        ]
    },

    /*{
        alt: "Avatar editor",
        columns: [
            {
                images: [
                    {
                        alt: "Jerseys",
                        source: "./images/screenshots/Screenshot_20230731_231831_Expo Go.jpg"
                    },

                    {
                        alt: "Jerseys 2",
                        source: "./images/screenshots/Screenshot_20230731_231913_Expo Go.jpg"
                    }
                ]
            },
            
            {
                images: [
                    {
                        alt: "Glasses",
                        source: "./images/screenshots/Screenshot_20230731_231918_Expo Go.jpg"
                    },

                    {
                        alt: "Heads",
                        source: "./images/screenshots/Screenshot_20230731_231858_Expo Go.jpg"
                    }
                ]
            },

            {
                images: [
                    {
                        alt: "Heads 2",
                        source: "./images/screenshots/Screenshot_20230731_231855_Expo Go.jpg"
                    },

                    {
                        alt: "Helmets",
                        source: "./images/screenshots/Screenshot_20230731_231909_Expo Go.jpg"
                    }
                ]
            }
        ]
    }*/
];

export default function IndexPage() {
    return (
        <div>
            <Scroller sections={sections}/>

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
