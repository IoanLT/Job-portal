import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import SocialMediaLinks from './components/SocialMediaLinks';
import Dashboard from './components/Dashboard';
import SearchNav from './components/search-nav';
import Footer from './components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import AboutUs from './components/AboutUs/AboutUs';
import JobPortalContext from './JobPortalContext';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Nunito',
    },
    palette: {
        primary: {
            main: 'rgb(191, 85, 236)',
        },
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: [],
            jobStatus: false,
            savedJobsArray: [],
            totalResults: 0,
            currentPage: 1,
        };
        this.dashboardRef = React.createRef();
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        const savedJobsIdArray = this.state.savedJobsArray.map((job) => job.id);

        filteredJobsArray.forEach((job) => {
            job['isFavorite'] = savedJobsIdArray.includes(job.id);
        });
        this.dashboardRef.current.resetSearchedJobList();
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
        const { user, isAuthenticated } = this.props.auth0;
        const name = isAuthenticated ? user.name : 'Unknown Chuck';
        return (
            <ThemeProvider theme={theme}>
                <JobPortalContext.Provider value={{ userName: name }}>
                    <div className="landing--page--container" id="home">
                        <Navbar />
                        <h1>Hi {name}!</h1>
                        <h2>Find the latest remote jobs!</h2>
                        
                        {/* Parent App passes the function to SearchNav child: 
                "hey SearchNav" call api and filter and give me the result by calling this function */}
                        <SearchNav
                            functionToCallForFilteredJobs={
                                this.getFilteredJobsListFromSearchNav
                            }
                        />

                        {/* <div className="brush-pattern" /> */}
                    </div>

                    <Dashboard
                        jobsArray={this.state.jobsArray}
                        jobStatus={this.state.jobStatus}
                        savedJobsArray={this.state.savedJobsArray}
                        toggleJobInSavedJobs={this.toggleJobInSavedJobs}
                        ref={this.dashboardRef}
                    />

                    <AboutUs />
                    <Footer />
                </JobPortalContext.Provider>
            </ThemeProvider>
        );
    }
}

export default withAuth0(App);
