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
                    <ul className="ftr-col">
                        <li>
                            <img src="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" alt="roxana" />
                        </li>
                        <li>Roxana Florea</li>
                        <li>Tech Lead</li>                          
                        
                    </ul>           

                    <ul className="ftr-col">
                        <li>
                            <img src="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png" alt="viktoria" />
                        </li>  
                        <li>Viktoria Kulinkovich</li>                
                        <li>CEO</li>                                                    
                    </ul>

                    <ul className="ftr-col">
                        <li>
                            <img src="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png" alt="aya" />
                        </li>
                        <li>Aya Berdyeva</li>                
                        <li>Head of engineering</li>                                                    
                    </ul>

                    <ul className="ftr-col">
                        <li>
                            <img src="https://www.stickees.com/files/cartoon/the-simpsons/2241-bart-simpson-scare.png" alt="ioan" />
                        </li> 
                        <li>Ioan Tranole</li>
                        <li>UI Designer</li>    
                                       
                    </ul>
                </div>
            </footer>
        </div>
    )
}
