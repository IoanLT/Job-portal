import React, { Component } from 'react';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';






class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUserInput: '',
            locationUserInput: '',
            categoryUserChoice: ''
        }
    }


    filterByLocation = (jobs) => {
        return jobs.filter(job => job.candidate_required_location.toLowerCase().includes(this.state.locationUserInput.toLowerCase()));
    }

    filterByCategory = (jobs) => {
        return jobs.filter(job => job.category.includes(this.state.categoryUserChoice));
    }

    getJobsFromApiAndPassArrayToParentFunc = () => {
        Axios.get('https://remotive.io/api/remote-jobs?search=' + this.state.searchUserInput)
            .then(response => response.data.jobs)
            .then(jobs => this.filterByLocation(jobs))
            .then(jobs => this.filterByCategory(jobs))
            .then(jobs => {
                //here SearchNav is calling the JobsList's 
                //function with the joblist array returned from the api and filtered
                this.props.functionToCallForFilteredJobs(jobs);
            })
    }

    getSearchUserInputOnChange = (ev) => {
        this.setState({ searchUserInput: ev.target.value })
    }

    getLocationUserInputOnChange = (ev) => {
        this.setState({ locationUserInput: ev.target.value })
    }

    getCategoryUserChoice = (ev) => {
        this.setState ({ categoryUserChoice: ev })
    }

    render() {
        return (<div>
            <input className="joblist--input" type="text" placeholder="e.g Front-end development" onChange={this.getSearchUserInputOnChange}></input>
            <input className="joblist--input" type="text" placeholder="e.g USA" onChange={this.getLocationUserInputOnChange}></input>
  
            <Button variant="success" onClick={this.getJobsFromApiAndPassArrayToParentFunc}>Search</Button>

  


            <Dropdown onSelect={this.getCategoryUserChoice}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    {this.state.categoryUserChoice}
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Software Development">Software Development</Dropdown.Item>
                    <Dropdown.Item eventKey="Design">Design</Dropdown.Item>
                    <Dropdown.Item eventKey="Human Resources">Human Resources</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>);
    }
}

export default SearchNav;