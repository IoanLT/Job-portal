import React from 'react';
import './AboutUs.css';
import roxana from '../../assets/roxana.jpeg';
import aya2 from '../../assets/aya2.jpg';
import ioan from '../../assets/ioan.jpg';
import vic from '../../assets/vic.jpg';

const ourTeam = [
    {
        name: 'Roxana Florea',
        avatar: roxana,
        position: 'Tech Lead',
        description:
            'Roxana comes from an aviation background, her passions are coding and travelling.',
    },
    {
        name: 'Victoria Kulinkovich',
        avatar: vic,
        position: 'Chief Executive Officer',
        description:
            'Victoria comes from math background, her passions are travelling, extreme sports and volleyball',
    },
    {
        name: 'Aya Berdyeva',
        avatar: aya2,
        position: 'Principal Engineer',
        description: "Aya comes from design background and her passions are coding, exploring and trainig with her dog Misha." 
    },
    {
        name: 'Ioan Tranole',
        avatar: ioan,
        position: 'UI designer',
        description:
            'Ioan comes from an environmental background and his passions are hiking, rock climbing and surfing.',
    },
];

export default function AboutUs() {
    return (
        <div id="aboutUs" className="aboutUs--section">
            <section className="aboutUs--description">
                <div className="aboutUs--heading--mission">
                    <h2 className="aboutUs--heading">Our mission</h2>
                </div>
                <div className="aboutUs--idea">
                    <p>
                        Our mission was to work on a project that is
                        challenging, fun and meaningful.
                    </p>
                    <p>
                        It took us roughly a week to come up with this idea, and
                        felt motivated from the beginning.
                    </p>
                    <p>
                        The challenging part was having to filter the job
                        selection and narrow the search to meet the users needs
                        while providing a good user experience overall.{' '}
                    </p>
                </div>
                <div className="brush-pattern" />
            </section>

            <section className="aboutUs--team">
                <div className="aboutUs--heading--team">
                    <h2 className="aboutUs--heading">The Team</h2>
                    <span className="aboutUs--heart">💗</span>
                    <span className="aboutUs--hands">🤲🏼</span>
                </div>
                <div className="aboutUs--team--members">
                    {ourTeam.map((member) => (
                        <div
                            className="aboutUs--member--card"
                            key={member.name}
                        >
                            <img
                                className="aboutUs--member--image"
                                src={member.avatar}
                                alt={member.name}
                            />
                            <h4>{member.name}</h4>
                            <h5>{member.position}</h5>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
