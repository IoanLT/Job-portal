import React from 'react';
import Axios from 'axios';
import Job from './Job';
import SearchNav from './SearchNav';

//function to remove html from job description
const removeHtml = (text) =>{
    let countPar = 0;
    let leftover = '';

      for(let i = 0; i<text.length; i++){
        if(text[i]==='<'){
          countPar++;
        }else if(text[i]==='>'){
          countPar--;
        }else if(countPar===0){
          leftover+=text[i]
        }
      }
      return leftover
    }



class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: []
        }
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        this.setState({
            jobsArray: filteredJobsArray
        })
    }

    render() {
        return (
            <div>
               {/* Parent JobsList passes the function to SearchNav child: 
               "hey SearchNav" call api and filter and give me the result by calling this function */}
                <SearchNav functionToCallForFilteredJobs={this.getFilteredJobsListFromSearchNav} />
                {
                    this.state.jobsArray.map((jobObject) => {
                        return (
                            <Job
                            logo={jobObject.company_logo_url}
                            title={jobObject.title}
                            salary={jobObject.salary}
                            type={jobObject.job_type.split('_').join(' ')}                 
                            location={jobObject.candidate_required_location}
                            company={jobObject.company_name}
                            date={jobObject.publication_date.slice(0,10)}
                            description={removeHtml(jobObject.description)}
                            // key={index}
                            key={jobObject.id}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
export default JobList;