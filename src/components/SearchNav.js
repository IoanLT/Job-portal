import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-scroll';
import './Navbar/Navbar.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './SearchNav.css';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';







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
        if (this.state.categoryUserChoice === "Categories") {
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
        if (this.state.searchUserInput !== '') {
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
        console.log(ev.target.value);
        this.setState({ categoryUserChoice: ev.target.value })
    }

    getCheckedFullTime = (ev) => {
        this.setState({ jobTypeCheckBoxFullChecked: !this.state.jobTypeCheckBoxFullChecked })
    }

    getCheckedPartTime = (ev) => {
        this.setState({ jobTypeCheckBoxPartChecked: !this.state.jobTypeCheckBoxPartChecked })
    }

    getCheckedIfSalaryIsSpecified = (ev) => {
        this.setState({ salarySpecifiedChecked: !this.state.salarySpecifiedChecked })
    }

    getCategories = () => {
        Axios.get('https://remotive.io/api/remote-jobs/categories')
            .then(response => response.data.jobs)
            .then(categoriesFromApi => this.setState({ categories: categoriesFromApi }))
    }



    render() {
        return (

            <div>
                <FormGroup>



                    <form noValidate autoComplete="off">
                        <TextField
                            id="search-keyword"
                            label="Search by keyword"
                            variant="outlined"
                            onChange={this.getSearchUserInputOnChange}
                            onKeyPress={(ev) => {
                                if (ev.key === "Enter") { this.getJobsFromApiAndPassArrayToParentFunc() }
                            }} />

                        <TextField
                            id="search-location"
                            label="Candidate location"
                            variant="outlined"
                            onChange={this.getLocationUserInputOnChange}
                            onKeyPress={(ev) => {
                                if (ev.key === "Enter") { this.getJobsFromApiAndPassArrayToParentFunc() }
                            }} />
                            
                    </form>

                    


                </FormGroup>




                <FormGroup row>


                  

                    <FormControl className="categories-select">
                       
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={this.state.categoryUserChoice === "" || this.state.categoryUserChoice === "Categories" ? "Categories" : this.state.categoryUserChoice}
                            onChange={this.getCategoryUserChoice}
                        >
                            <MenuItem value="Categories">All categories</MenuItem>
                            {this.state.categories.map((category, i) => <MenuItem value={category.name} key={i}>{category.name}</MenuItem>)}

                        </Select>
                    </FormControl>




                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.jobTypeCheckBoxFullChecked}
                                onChange={this.getCheckedFullTime}
                                name="checkedFull"
                                color="primary"
                            />
                        }
                        label="Full time"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.jobTypeCheckBoxPartChecked}
                                onChange={this.getCheckedPartTime}
                                name="checkedPart"
                                color="primary"
                            />
                        }
                        label="Part time"
                    />


                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.salarySpecifiedChecked}
                                onChange={this.getCheckedIfSalaryIsSpecified}
                                name="checkedSalary"
                                color="primary"
                            />
                        }
                        label="Salary specified"
                    />
                </FormGroup>

                <FormGroup >

                    <Link
                        onClick={this.getJobsFromApiAndPassArrayToParentFunc}
                        delay={2000}
                        activeClass="active"
                        to="dashboard"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                        className="search-button"
                    >
                        Search
                </Link>

                </FormGroup>

            </div>);
    }
}

export default SearchNav;




