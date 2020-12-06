import React from 'react';
import './SocialMediaLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
  
export default function SocialMediaLinks() {
    return (
        <div className="social-media">
            <ul id="social-media-links">                  
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>

            <section className="social--media--account">
                <h4>Don't have an account ?</h4>
                <button className="social--media--btn">Sign up now!</button>
            </section>         
            
        </div>
    )
}
