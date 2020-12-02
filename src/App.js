
import './App.css';
import React from 'react';
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

    pushJobInSavedJobs = (jobId) => {
        let newSavedJobsIdArray = this.state.savedJobsIdArray;
        newSavedJobsIdArray.push(jobId);
        this.setState({
            savedJobsIdArray: newSavedJobsIdArray,
        });
        this.getSavedJobsArray();
    };

    getSavedJobsArray = () => {
        let newSavedJobsArray = [];
        this.state.savedJobsIdArray.forEach((id) => {
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
                <h1>Welcome to Chuks job portal!</h1>

                {/* Parent App passes the function to SearchNav child: 
               "hey SearchNav" call api and filter and give me the result by calling this function */}
                <SearchNav
                    functionToCallForFilteredJobs={
                        this.getFilteredJobsListFromSearchNav
                    }
                />
                <Dashboard
                    jobsArray={this.state.jobsArray}
                    jobStatus={this.state.jobStatus}
                    savedJobsArray={this.state.savedJobsArray}
                    pushJobInSavedJobs={this.pushJobInSavedJobs}
                />
                <SocialMediaLinks />
            </div>
        );
    }
}

export default App;