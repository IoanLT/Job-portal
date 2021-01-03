import React from 'react'
import SocialMediaLinks from './SocialMediaLinks';
import './Footer.css';
// import './SocialMediaLinks.css';

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <SocialMediaLinks /> 

                <hr/>

                {/* <div>
                    <h2 className="made-with-love">
                        Made with <span className="heart">♥</span> by:
                    </h2>                    
                </div>               */}

                <div className="footer-content">
                    <ul className="our--team">
                        <li>We're on Github</li>

                        <li>
                            <a
                                href="https://github.com/roxana-florea"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Roxana Florea
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/KulinkovichVA"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Viktoria Kulinkovich
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/AyaDesigner"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Aya Berdyeva
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/IoanLT"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ioan Tranole
                            </a>
                        </li>                   
                    </ul>   


                    <ul className="our--community">
                        <li>Community</li>

                        <li>
                            <a
                                href="https://stackoverflow.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Stack Overflow
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.reddit.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Reddit
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.freecodecamp.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                freeCodeCamp
                            </a>
                        </li>                   
                    </ul>


                    <ul className="online--tools">
                        <li>Online tools</li>

                        <li>
                            <a
                                href="https://www.google.com/alerts"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google alerts
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.wisestamp.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Email signature
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/intl/en_in/drive/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google drive
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://evernote.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Evernote
                            </a>
                        </li>                   
                    </ul>

                </div>
                <div className="copyright--container">Copyright © 2021 Chucks Portal Ltd.</div>
            </footer>
        </div>
    )
}
