import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./Container";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function DeveloperContact() {
    return (
        <div style={{
            alignItems: "center"
        }} className="developer-contact">
            <img alt="Nora Söderlund" src="/images/uploads/1678048199639.jpg" style={{
                gridArea: "image",

                width: "6.5em",
                height: "6.5em",

                aspectRatio: 400 / 400,

                background: "rgba(255, 255, 255, .05)",

                marginRight: "1em",
                
                borderStyle: "solid",
                borderWidth: 7,
                borderRadius: "50%",
                borderColor: "transparent",

                boxShadow: "1px 3px 26px -4px rgba(0, 0, 0, .5)",
                boxSizing: "border-box"
            }}/>

            <h2 style={{ gridArea: "name", margin: 0 }}>Nora Söderlund</h2>

            <div className="developer-contact-links" style={{
                gridArea: "links",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap", 
                gap: "1em"
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
    );
};
