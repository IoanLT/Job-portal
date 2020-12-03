import React, { Component } from 'react';
import MyBoard from './MyBoard';
import JobList from './JobList';
import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <JobList
                    jobsArray={this.props.jobsArray}
                    jobStatus={this.props.jobStatus}
                    toggleJobInSavedJobs={this.props.toggleJobInSavedJobs}
                />
                {this.props.jobStatus && (
                    <MyBoard savedJobsArray={this.props.savedJobsArray} />
                )}
            </div>
        );
    }
}
