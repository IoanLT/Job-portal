import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SocialMediaLinks from './components/SocialMediaLinks';
import Dashboard from './components/Dashboard';
import SearchNav from './components/SearchNav';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: [],
            jobStatus: false,
            savedJobsIdArray: [],
            savedJobsArray: [],
        };
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        this.setState({
            jobsArray: filteredJobsArray,
            jobStatus: true,
        });
    };

    toggleJobInSavedJobs = (jobId) => {
        let newSavedJobsIdArray = this.state.savedJobsIdArray;
        const jobIdIndex = newSavedJobsIdArray.indexOf(jobId);

        console.log(jobIdIndex);

        if (jobIdIndex >= 0) {
            newSavedJobsIdArray.splice(jobIdIndex, 1);
        } else {
            newSavedJobsIdArray.push(jobId);
        }
        this.setState({
            savedJobsIdArray: newSavedJobsIdArray,
        });
        this.getSavedJobsArray();
    };

    getSavedJobsArray = () => {
        let newSavedJobsArray = this.state.savedJobsArray.filter((job) => {
            return this.state.savedJobsIdArray.includes(job.id);
        });
        let newSavedJobsIdArray = this.state.savedJobsIdArray.filter((id) => {
            return !this.state.savedJobsArray.some((job) => job.id === id);
        });

        newSavedJobsIdArray.forEach((id) => {
            this.state.jobsArray.forEach((job) => {
                if (job.id == id) {
                    newSavedJobsArray.push(job);
                }
            });
        });
        this.setState({
            savedJobsArray: newSavedJobsArray,
        });
    };

    render() {
        return (
            <div className="landing--page--container">
                <Navbar />
                <h1>Welcome to Chuks job portal!</h1>

                {/* Parent App passes the function to SearchNav child: 
               "hey SearchNav" call api and filter and give me the result by calling this function */}
                <SearchNav
                    functionToCallForFilteredJobs={
                        this.getFilteredJobsListFromSearchNav
                    }
                />
                <SocialMediaLinks />
                <Dashboard
                    jobsArray={this.state.jobsArray}
                    jobStatus={this.state.jobStatus}
                    savedJobsArray={this.state.savedJobsArray}
                    toggleJobInSavedJobs={this.toggleJobInSavedJobs}
                    savedJobsIdArray={this.state.savedJobsIdArray}
                />
            </div>
        );
    }
}

export default App;
