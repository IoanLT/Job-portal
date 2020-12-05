import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import SocialMediaLinks from './components/SocialMediaLinks';
import Dashboard from './components/Dashboard';
import SearchNav from './components/SearchNav';
import { ToggleOff } from '@material-ui/icons';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: [],
            jobStatus: false,
            savedJobsArray: [],
        };
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        const savedJobsIdArray = this.state.savedJobsArray.map((job) => job.id);

        filteredJobsArray.forEach((job) => {
            job['isFavorite'] = savedJobsIdArray.includes(job.id);
        });
        this.setState({
            jobsArray: filteredJobsArray,
            jobStatus: true,
        });
    };

    toggleJobInSavedJobs = (jobId) => {
        let newSavedJobsArray = this.state.savedJobsArray;
        const jobIndex = this.state.savedJobsArray.findIndex(
            (job) => job.id === jobId
        );
        const toggleJob = this.state.jobsArray.find((job) => job.id === jobId);
        if (jobIndex >= 0) {
            if (toggleJob) {
                toggleJob.isFavorite = false;
            }
            newSavedJobsArray.splice(jobIndex, 1);
        } else {
            toggleJob.isFavorite = true;
            newSavedJobsArray.push(toggleJob);
        }
        this.setState({
            savedJobsArray: newSavedJobsArray,
        });
    };

    render() {
        return (
            <>
                <div className="landing--page--container" id="home">
                    <Navbar />
                    <h1>Welcome to Chuks job portal!</h1>

                    {/* Parent App passes the function to SearchNav child: 
                "hey SearchNav" call api and filter and give me the result by calling this function */}
                    <SearchNav
                        functionToCallForFilteredJobs={
                            this.getFilteredJobsListFromSearchNav
                        }
                    />
                </div>
                {/* <SocialMediaLinks /> */}
                <Dashboard
                    jobsArray={this.state.jobsArray}
                    jobStatus={this.state.jobStatus}
                    savedJobsArray={this.state.savedJobsArray}
                    toggleJobInSavedJobs={this.toggleJobInSavedJobs}
                />
            </>
        );
    }
}

export default App;
