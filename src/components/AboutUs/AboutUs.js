import React from 'react';
import './AboutUs.css';



export default function AboutUs() {
    return (        
        <div id="aboutUs" className="aboutUs--section">
            <section className="aboutUs--description">
                <div className="aboutUs--heading--mission">
                    <h2 className="aboutUs--heading">Our mission</h2>                    
                </div>
                <div className="aboutUs--idea">
                    <p>Our mission was to work on a project that is challenging, fun and meaningful.</p>
                    <p>It took us roughly a week to come up with this idea, and felt motivated from the beginning.</p>
                    <p>The challenging part was having to filter the job selection and 
                        narrow the search to meet the users needs while providing a good user experience overall. </p>
                </div>  
                <div className="brush-pattern" />              
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
