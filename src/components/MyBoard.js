import React, { Component } from 'react';
// import JobStatistics from './JobStatistics';
// import Calendar from './Calendar';
// import Cvs from './Cvs';
import SavedJobs from './SavedJobs';
import './MyBoard.css';

export default class MyBoard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="job-list-container">
                    <p>Job 1</p>
                    <p>Job 2</p>
                    <p>Job 3</p>
                    <p>Job 4</p>
                </div>
                <div className="my-board-container">
                    <h1>Job Statistics</h1>
                    <h1>Calendar</h1>
                    <h1>My CVs</h1>
                    <SavedJobs title="saved jobs" />
                </div>
            </div>
        );
    }
}
