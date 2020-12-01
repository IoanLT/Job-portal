import React from 'react';
import Axios from 'axios';
import JobCard from './JobCard';
import SearchNav from './SearchNav';
import './JobList.css'


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
            jobsArray: [],
            jobStatus: false
            
        }
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        this.setState({
            jobsArray: filteredJobsArray,
            jobStatus: true
        })
    }



    render() {
        
        return (
            <div>
               {/* Parent JobsList passes the function to SearchNav child: 
               "hey SearchNav" call api and filter and give me the result by calling this function */}
                <SearchNav functionToCallForFilteredJobs={this.getFilteredJobsListFromSearchNav} />
                <div className='list-container'>
                <p className={this.state.jobStatus?'result-number-show': 'result-number-hide'}>results:{this.state.jobsArray.length}</p>
                <div className={this.state.jobStatus? 'scrollList': ''}>
                {
                    this.state.jobsArray.map((jobObject) => {
                        return (
                            <JobCard
                            logo={jobObject.company_logo_url}
                            title={jobObject.title}
                            salary={jobObject.salary}
                            type={jobObject.job_type.split('_').join(' ')}                 
                            location={jobObject.candidate_required_location}
                            company={jobObject.company_name}
                            date={jobObject.publication_date.slice(0,10)}
                            description={removeHtml(jobObject.description)}
                            key={jobObject.id}
                            url={jobObject.url}
                            />
                        );
                    })
                }
                </div>
                </div>
            
            </div>
        );
    }
}
export default JobList;