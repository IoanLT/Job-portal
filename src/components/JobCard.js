import React, { Component } from 'react';
import './JobCard.css';

let logoImage =
    'https://media.istockphoto.com/vectors/building-icon-vector-id873392526?b=1&k=6&m=873392526&s=612x612&w=0&h=5j7gUgw6j25xi0wgMQnX9FkyWd4nDpdzaOe-wlBW2J8=';
// Job Card
class JobCard extends Component {
    state = {
        showDetails: false,
    };

    showModal = () => {
        this.setState({ showDetails: true });
    };

    closeModal = () => {
        this.setState({ showDetails: false });
    };

    favorite = () => {
        this.props.toggleJobInSavedJobs();
    };

    render() {
        return (
            <div className="job-container">
                <div className="logo-container">
                    <img
                        className="job-logo"
                        src={
                            this.props.logo === undefined
                                ? logoImage
                                : this.props.logo
                        }
                        alt={this.props.company}
                    />
                </div>

                <div>
                    <h2 className="job-title">
                        {this.props.title} {this.props.type}
                    </h2>
                    <h3 className="job-company">{this.props.company}</h3>
                    <p>{this.props.salary}</p>
                    <h4 className="job-location">{this.props.location}</h4>
                    <span className="seeFullJob" onClick={this.showModal}>
                        See full job description
                    </span>
                    <p className="job-date">{this.props.date}</p>
                </div>

                <div className="btn-container">
                    <div
                        onClick={this.favorite}
                        className={
                            !this.props.isFavorite ? 'not-favorite' : 'favorite'
                        }
                    ></div>
                    <a href={this.props.url} target="_blank" rel="noreferrer">
                        <button>Apply</button>
                    </a>
                </div>

                {this.state.showDetails && (
                    <div className="job-description">
                        <div className="close-btn">
                            <span onClick={this.closeModal}>&#10006;</span>
                        </div>

                        <div className="fixed-title">
                            <div className="logo-details">
                                <img
                                    className="job-logo2"
                                    src={
                                        this.props.logo === undefined
                                            ? logoImage
                                            : this.props.logo
                                    }
                                    alt={this.props.company}
                                />
                                <div>
                                    <h3 className="job-title">
                                        {this.props.title}
                                    </h3>
                                    <div className="details">
                                        <p>{this.props.company} - </p>
                                        <p>{this.props.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="heart-apply-container">
                                <a
                                    href={this.props.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button>Apply</button>
                                </a>
                                <div
                                    onClick={this.favorite}
                                    className={
                                        !this.props.isFavorite
                                            ? 'not-favorite'
                                            : 'favorite'
                                    }
                                ></div>
                            </div>
                        </div>

                        <div className="description-text">
                            <p>{this.props.description}</p>
                            <p>Job type: {this.props.type}</p>
                            <p>
                                Salary:
                                {this.props.salary === ''
                                    ? 'N/A'
                                    : this.props.salary}
                            </p>
                            <a
                                href="https://www.numbeo.com/cost-of-living/"
                                target="_blank"
                            >
                                <p>Location: {this.props.location}</p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default JobCard;
