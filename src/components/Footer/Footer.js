import React from 'react'
import SocialMediaLinks from './SocialMediaLinks';
import './Footer.css';
// import './SocialMediaLinks.css';

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <SocialMediaLinks />

                <div className="footer-content">
                    <ul className="ftr-col company">
                        <li>Our Company</li>
                        <li>How we work</li>                 
                        <li>Reviews</li>
                    </ul>           

                    <ul className="ftr-col contact">
                        <li>Contact</li>                
                        <li>Support</li>
                        <li>Live chat</li>                            
                    </ul>

                    <ul className="ftr-col others">
                        <li>Terms of use</li>                
                        <li>Payment options</li>
                        <li>Licenses</li>                            
                    </ul>

                    <ul className="ftr-col help">
                        <li>Help me</li>
                        <li>FAQ</li>                
                        <li>Privacy policy</li>                
                    </ul>
                </div>
            </footer>
        </div>
    )
}
