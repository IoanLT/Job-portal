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

                <div>
                    <h2 className="made-with-love">
                        Made with <span className="heart">♥</span> by:
                    </h2>                    
                </div>              

                <div className="footer-content">
                    <ul className="ftr-col company">
                        <li>Roxana Florea</li>
                        <li>Github Account</li>                 
                        <li>#</li>
                    </ul>           

                    <ul className="ftr-col contact">
                        <li>Viktoria Kulinkovich</li>                
                        <li>Github Account</li>
                        <li>#</li>                            
                    </ul>

                    <ul className="ftr-col others">
                        <li>Aya Berdyeva</li>                
                        <li>Github Account</li>
                        <li>#</li>                            
                    </ul>

                    <ul className="ftr-col help">
                        <li>Ioan Tranole</li>
                        <li>Github Account</li>                
                        <li>#</li>                
                    </ul>
                </div>
            </footer>
        </div>
    )
}
