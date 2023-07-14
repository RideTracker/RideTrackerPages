import React from "react";
import ScreenshotImage from "../components/ScreenshotImage";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicyPage() {
    return (
        <div>
            <Header style={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center"
            }}>
                <Container width={0.75}>
                    <h1>Privacy Policy</h1>

                    <ol>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#information-we-collect">Information we collect</a></li>
                        <li><a href="#how-we-protect-your-information">How we protect your information</a></li>
                        <li><a href="#how-to-control-your-privacy">How to control your privacy</a></li>
                        <li><a href="#information-for-users-in-the-EEA-United-Kingdom-Switzerland-and-Brazil">Information for Users in the EEA, United Kingdom, Switzerland, and Brazil</a></li>
                        <li><a href="#information-for-users-in-certain-us-states">Information for Users in certain U.S. States</a></li>
                        <li><a href="#privacy-policy-changes">Privacy Policy changes</a></li>
                        <li><a href="#contact-us">Contact us</a></li>
                    </ol>

                    <p>Last modified 15th of July, 2023.</p>

                    <div id="introduction">
                        <h2>Introduction</h2>

                        <p>We aim to have the most straight-forward, clear, and understandable privacy policy we can provide in order to be as transparent as possible. In this document, you will find everything pertaining to your privacy that you may need to know.</p>
                    
                        <p><i>Disclaimer: during the duration of the public beta period (version 0.9), some features mentioned in this privacy policy may not be publicly available yet. In such case, refer to the <a href="#contact-us">contact us</a> section.</i></p>
                    </div>

                    <div id="information-we-collect">
                        <h2>Information we collect</h2>

                        <p>We collect information, some of which may be used to personaly identify you. We collect the information from several sources, inluding information your provide to us and information we collect automatically.</p>

                        <h3>Information you provide to us</h3>

                        <ul>
                            <li><p><b>Account information.</b> When you create your account, you provide your <u>firstname</u> and <u>lastname</u>, you can however opt to only provide your lastname initial followed by a dot. You also provide your <u>e-mail address</u> as a way for us to authenticate your identity as a two-step authentication step. Finally, you provide a secure <u>password</u>.</p></li>
                        
                            <li><p><b>Activity data.</b> When you upload an activity, we collect the <u>latitude & longitude</u> coordinates, <u>altitude</u>, <u>speed</u>, and <u>accuracy</u> of each Global Positioning System information set, provided by your device.</p></li>
                        
                            <li><p><b>Content data.</b> When you upload activities or any other kind of post, you can upload <u>images</u> and <u>videos</u> which can contain <u>metadata information</u> that may be used to identify you.</p></li>
                        </ul>

                        <h3>Information we collect automatically</h3>

                        <ul>
                            <li><p><b>Information about your device.</b> We collect information pertaining to your currently <u>installed app version</u> and <u>device information</u> for safety and performance measures. During recordings of activities, we also collect your <u>device battery level</u> and <u>power charging status</u> each time it changes, with an interval of 60 seconds.</p></li>
                        
                            <li>
                                <p><b>Information about your network.</b> Our platform provider, Cloudflare&reg; collects information pertaining to your network provider. This can include your <u>IP-address</u>, <u>geolocation</u>, <u>internet service provider</u>, and more.</p>
                            
                                <p><i>Disclaimer: we are not affiliated with Cloudflare.</i></p>
                            </li>
                        </ul>
                    </div>

                    <div id="how-we-protect-your-information">
                        <h2>How we protect your information</h2>

                        <p>We take different type of measures to protect you and your information. For everything, the very minimum we do is use Transport Layer Security to encrypt text and images in transit. For sensitive information, such as your password, we obfuscate it with an undisclosed encrypted password hashing algorithm.</p>
                    </div>
                    
                    <div id="how-to-control-your-privacy">
                        <h2>How to control your privacy</h2>

                        <p>We believe that you should be able to tailor your experience as you wish, therefore we <i>plan</i> on giving you the ability to change the visibility of your profile between public and private, the ability to block specific users from viewing your profile, and block specific users from interacting with your profile.</p>

                        <p>In the event that you wish to deactivate or delete your account, you may refer to the <a href="#contact-us">contact us</a> section.</p>

                        <p>Deleting your account does not delete all of your content, instead, your account is deleted and any information that may be used to personally identify you will be deleted. If you wish to also delete all your content, please <a href="#contact-us">contact us</a> <b>within 30 days of your account deletion.</b> After the 30-day period, we will no longer have any way to associate you with your previous content and therefore cannot delete any of your previous content.</p>

                        <p><i>Disclaimer: below you will find sections primarily targeted at specific regions, however, we offer the same policy to everyone, regardless of their location, with the exception of allowing agents to act on your behalf.</i></p>
                    </div>
                    
                    <div id="information-for-users-in-the-EEA-United-Kingdom-Switzerland-and-Brazil">
                        <h2>Information for Users in the EEA, United Kingdom, Switzerland, and Brazil</h2>

                        <p>Certain local laws, such as the European Union's General Data Protection Regulation and Brazil's Lei Geral de Proteção de Dados, require services to provide information about the information they collect, how they use it, and the lawful basis for processing it.</p>

                        <p>If you are located in certain regions, including the European Union, you may have additional rights that you can exercise through our app directly or by refering to the <a href="#contact-us">contact us</a> section, such as:</p>

                        <ul>
                            <li>Right of access to your personal data.</li>
                            <li>Right to rectify your personal data if they are incorrect.</li>
                            <li>Right to erase your personal data.</li>
                            <li>Right to limit the processing of your personal data.</li>
                            <li>Right to the portability of your personal data.</li>
                            <li>Right to object to the processing of your personal data.</li>
                            <li>Right to withdraw consent.</li>
                        </ul>
                    </div>
                    
                    <div id="information-for-users-in-certain-us-states">
                        <h2>Information for Users in certain U.S. States</h2>

                        <p>If you are a resident of California, Colorado, Connecticut, Utah, or Virginia, you may have additional rights that you (or, in certain states, an authorized agent acting on your behalf) can exercise through our app directly or by contacting us, including the right to:</p>
                        
                        <ul>
                            <li>More information about the categories and specific pieces of personal information we have collected and disclosed for a business purpose in the last 12 months.</li>
                            <li>Access and/or receive a copy of certain personal information we hold about you.</li>
                            <li>Correct certain of your personal information.</li>
                            <li>Delete certain personal information we hold you.</li>
                            <li>Receive information about the financial incentives that we offer to you, if any.</li>
                            <li>Opt out of the processing of your personal information for purposes of profiling in furtherance of decisions that produce legal or similarly significant effects, if applicable.</li> 
                        </ul>

                        <p>You also have the right to not be discriminated against for exercising your rights. You may also have the right to opt out of "sales" of your information and "sharing/processing of your information for targeted advertising." <b>We <u>do not</u> sell the personal data of our users or share personal data for targeted advertising purposes.</b></p>

                        <p>If you are an authorized agent submitting a request on a user's behalf (where permitted), we may require proof of your written authorization before processing the request. Depending on applicable law, you may have the right to appeal our decision to deny your request. </p>

                        <h3>Additional Information for users in California</h3>

                        <p>In addition to the rights described above, consumers residing in California are afforded the right to certain additional information with respect to their personal information under the California Consumer Privacy Act.</p>
                    </div>
                    
                    <div id="privacy-policy-changes">
                        <h2>Privacy Policy changes</h2>

                        <p>We may from time to time update our privacy policy, in such case, this will be made known to you through the app before you use the app under the new policy. We will make an effort to highlight all the changes that may be relevant to you.</p>

                        <p>We will always update the date, seen at the start of the document, when we make changes.</p>
                    </div>
                    
                    <div id="contact-us">
                        <h2>Contact us</h2>

                        <p>For any inquiries regarding to the privacy policy or your privacy, please e-mail us at <a href="mailto:privacy@ridetracker.app">privacy@ridetracker.app</a>.</p>

                        <p>For any other inquiries, please e-mail us at <a href="mailto:contact@ridetracker.app">contact@ridetracker.app</a>.</p>
                    </div>
                </Container>
            </Header>

            <Footer/>
        </div>
    );
};
