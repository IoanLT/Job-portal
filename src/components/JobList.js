import React from 'react';
import Axios from 'axios';
import Job from './Job';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: []
        }
    }



    getJobs = () => {
        console.log("HEY")
        Axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code')
            .then(response => response.data)
            .then(data => {
                console.log(data);
                this.setState({
                    jobsArray: data
                })
            })
    }
 

    render() {
        return (
            <div>
                <input type="text" placeholder="e.g Front-end development"></input>
                <button onClick={this.getJobs}>Search</button>
                {
                    this.state.jobsArray.map((jobObject) => {
                        return (
                            <Job
                                title={jobObject.title}
                                type={jobObject.type}
                                location={jobObject.location}
                                company={jobObject.company}
                                // key={index} 
                                key={jobObject.id}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default JobList;
