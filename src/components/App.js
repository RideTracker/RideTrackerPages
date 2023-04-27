import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneImage } from "./PhoneImage";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function App() {
    return (
        <div style={{
            backgroundColor: "#181821",

            height: "100vh"
        }}>
            <div style={{
                height: "60vh",
                padding: "20vh",

                display: "flex",
                flexDirection: "row",

                gap: "1em"
            }}>
                <div style={{
                    display: "flex",

                    flexDirection: "column",
                    flexGrow: 1
                }}>
                    <div style={{ flexGrow: 1 }}>
                        <h1 style={{ marginBottom: 0 }}>
                            <img alt="Ride Tracker" src="/images/logos/logo-white.png" style={{
                                width: "80%"
                            }}/>
                        </h1>

                        <h2 style={{ marginTop: 0 }}>A social platform for cyclists to record, share, plan, and replay rides!</h2>
                    
                        <h3>With Ride Tracker, you'll be spending more time on your bike than on your computer, planning your routes ahead!</h3>
                    </div>

                    <div>
                        <h2>Currently in the works, follow me to see the progress:</h2>
                        
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1em"
                        }}>
                            <img alt="Nora Söderlund" src="/images/uploads/1678048199639.jpg" style={{
                                width: "6.5em",
                                height: "6.5em",
                                
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
                                    <a href="https://nora-soderlund.se/" style={{
                                        display: "flex",
                                        gap: ".5em",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faLink} fontSize={24}/>

                                        Developer Blog
                                    </a>

                                    <a href="https://www.linkedin.com/in/nora-soderlund/" style={{
                                        display: "flex",
                                        gap: ".5em",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faLinkedin} fontSize={24}/>

                                        LinkedIn
                                    </a>

                                    <a href="https://github.com/nora-soderlund/" style={{
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
                    </div>
                </div>

                <div>
                    <PhoneImage>
                        <img src="/images/2022/draw-route.jpg" style={{
                            height: "60vh"
                        }}/>
                    </PhoneImage>
                </div>
            </div>
        </div>
    );
};
