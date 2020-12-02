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
            <div className="my-board-container">
                <JobsStatistic />
                <MyCalendar />
                <MyCvs />
                <SavedJobs savedJobsArray={this.props.savedJobsArray} />
            </div>
        );
    }
}
