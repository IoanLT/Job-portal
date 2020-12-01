import React, { Component } from 'react';
import JobsStatistic from './JobsStatistic';
import MyCalendar from './MyCalendar';
import MyCvs from './MyCvs';
import SavedJobs from './SavedJobs';
import './MyBoard.css';
import JobList from './JobList';

const savedJobs = ['job1', 'job2', 'job3', 'job4'];

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
                    <JobsStatistic />
                    <MyCalendar />
                    <MyCvs />
                    <SavedJobs savedJobsArray={savedJobs} />
                </div>
            </div>
        );
    }
}
