import React, { Component } from 'react';
import JobsStatistic from './JobsStatistic';
import MyCalendar from './MyCalendar';
import MyCvs from './MyCvs';
import SavedJobs from './SavedJobs';
import './MyBoard.css';
import JobList from './JobList';

export default class MyBoard extends Component {
    render() {
        return (
            <div className="my-board-container">
                <JobList
                    jobsArray={this.props.savedJobsArray}
                    jobStatus={this.props.jobStatus}
                    toggleJobInSavedJobs={this.props.toggleJobInSavedJobs}
                />
               
                <MyCalendar />
             
            </div>
        );
    }
}
