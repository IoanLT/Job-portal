import React from 'react';
import './SocialMediaLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faFacebook,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

export default function SocialMediaLinks() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className="social-media">
            <h2 className="follow--social">Follow us on:</h2>
            <ul id="social-media-links">
                <li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>

            {!isAuthenticated && (
                <section className="social--media--account">
                    <h4>Don't have an account ?</h4>
                    <button
                        onClick={() => {
                            loginWithRedirect({
                                screen_hint: 'signup',
                            });
                        }}
                        className="social--media--btn"
                    >
                        Sign up now!
                    </button>
                </section>
            )}
        </div>
    );
}
