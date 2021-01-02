import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
    return (        
        <div className="aboutUs--section">
            <section className="aboutUs--description">
                <div className="aboutUs--heading--mission">
                    <h2 className="aboutUs--heading">Our mission</h2>                    
                </div>
                <div className="aboutUs--idea">
                    <p>We decided to work on a project that was challenging, fun and meaningful.</p>
                    <p>The idea came about roughly a week after the initial assignment was given to us.</p>
                </div>
                
                {/* <img src="/images/icons/love-heart-hands.svg" alt="" /> */}
            </section>

            <section className="aboutUs--team">
                <div className="aboutUs--heading--team">
                    <h2 className="aboutUs--heading">The Team</h2>
                    <span className="aboutUs--heart">💗</span>
                    <span className="aboutUs--hands">🤲🏼</span>
                </div>
            </section>
                
        </div> 
    )       
}
