import React, { Component } from 'react';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUserInput: '',
            locationUserInput: '',
            categoryUserChoice: '',
            categories: [],
            jobTypeCheckBoxFullChecked: false,
            jobTypeCheckBoxPartChecked: false,
            salarySpecifiedChecked: false,
            loading: false

        }
    }

  

    componentDidMount() {
        this.getCategories();
    }


    filterByLocation = (jobs) => {
        return jobs.filter(job => job.candidate_required_location.toLowerCase().includes(this.state.locationUserInput.toLowerCase()));
    }

    filterByCategory = (jobs) => {
        if (this.state.categoryUserChoice === "-") {
            return jobs;
        }
        return jobs.filter(job => job.category.includes(this.state.categoryUserChoice));
    }

    filterByJobType = (jobs) => {
        if (this.state.jobTypeCheckBoxFullChecked === false && this.state.jobTypeCheckBoxPartChecked === false) {
            return jobs;
        }
        else if (this.state.jobTypeCheckBoxFullChecked && this.state.jobTypeCheckBoxPartChecked) {
            return jobs;
        }
        else if (this.state.jobTypeCheckBoxFullChecked) {
            return jobs.filter(job => job.job_type.includes("full_time"));
        }
        else {
            return jobs.filter(job => job.job_type.includes("part_time"));
        }
    }

    filterByIfSalaryIsSpecified = (jobs) => {
        if (this.state.salarySpecifiedChecked === false) {
            return jobs;
        }
        else {
            return jobs.filter(job => job.salary !== '');
        }
    }


    getJobsFromApiAndPassArrayToParentFunc = () => {
        let searchParamStr = '';
        if (this.state.searchUserInput !== ''){
            searchParamStr = `search=${this.state.searchUserInput}`;
        }

        
        Axios.get(`https://remotive.io/api/remote-jobs?${searchParamStr}`)
            .then(response => response.data.jobs)
            .then(jobs => this.filterByLocation(jobs))
            .then(jobs => this.filterByCategory(jobs))
            .then(jobs => this.filterByJobType(jobs))
            .then(jobs => this.filterByIfSalaryIsSpecified(jobs))

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
        this.setState({ categoryUserChoice: ev })
    }

    getCheckedFullTime = (ev) => {
        this.setState({ jobTypeCheckBoxFullChecked: !this.state.jobTypeCheckBoxFullChecked })
    }

    getCheckedPartTime = (ev) => {
        this.setState({ jobTypeCheckBoxPartChecked: !this.state.jobTypeCheckBoxPartChecked })
    }

    getCheckedIfSalaryIsSpecified = (ev) => {
        this.setState({ salarySpecifiedChecked: !this.state.salarySpecifiedChecked})

    }




    getCategories = () => {
        Axios.get('https://remotive.io/api/remote-jobs/categories')
            .then(response => response.data.jobs)
            .then(categoriesFromApi => this.setState({ categories: categoriesFromApi }))
    }



    render() {
        return (

            <div>
               <input className="joblist--input" type="text" placeholder="e.g Front-end development" onChange={this.getSearchUserInputOnChange} onKeyPress={(ev) => {
    if (ev.key === "Enter") {this.getJobsFromApiAndPassArrayToParentFunc()}}}></input>
<input className="joblist--input" type="text" placeholder="e.g USA" onChange={this.getLocationUserInputOnChange} onKeyPress={(ev) => {
    if (ev.key === "Enter") {this.getJobsFromApiAndPassArrayToParentFunc()}}}></input>

                <Button variant="success" onClick={this.getJobsFromApiAndPassArrayToParentFunc}>Search</Button>

                <Dropdown onSelect={this.getCategoryUserChoice}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                        {this.state.categoryUserChoice === "" || this.state.categoryUserChoice === "-" ? "Categories" : this.state.categoryUserChoice}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="-">-</Dropdown.Item>
                        {this.state.categories.map((category, i) => <Dropdown.Item eventKey={category.name} key={i}>{category.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>

                <Form>
                    <div key="inline-checkbox" className="mb-3">
                        <Form.Check inline label="Full time" type="checkbox" id="inline-checkbox-full" onChange={this.getCheckedFullTime} />
                        <Form.Check inline label="Part time" type="checkbox" id="inline-checkbox-part" onChange={this.getCheckedPartTime} />
                    </div>
                </Form>
{/* 
                <form className="range-field">
                    <input type="range" min="0" max="100" />
                </form>

 */}

            <Form>
                <div key="inline-checkbox" className="mb-3">
                    <Form.Check inline label="Salary specified" type="checkbox" id="inline-checkbox-salary" onChange={this.getCheckedIfSalaryIsSpecified} />
                </div>
            </Form>
        </div>);
    }
}

export default SearchNav;




