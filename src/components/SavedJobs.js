import React, { Component } from 'react';
import JobCard from './JobCard';
import './JobList.css';


//function to remove html from job description
const removeHtml = (text) => {
    let countPar = 0;
    let leftover = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            countPar++;
        } else if (text[i] === '>') {
            countPar--;
        } else if (countPar === 0) {
            leftover += text[i];
        }
    }
    return leftover;
};

export default class SavedJobs extends Component {
    render(props) {
        return (
            <div>
                <h1>Saved jobs</h1>
                {this.props.savedJobsArray.map((jobObject) => {
                    return (
                        <>
                            <JobCard
                                logo={jobObject.company_logo_url}
                                title={jobObject.title}
                                salary={jobObject.salary}
                                type={jobObject.job_type.split('_').join(' ')}
                                location={jobObject.candidate_required_location}
                                company={jobObject.company_name}
                                date={jobObject.publication_date.slice(0, 10)}
                                description={removeHtml(jobObject.description)}
                                key={jobObject.id}
                                id={jobObject.id}
                                url={jobObject.url}
                                pushJobInSavedJobs={
                                    this.props.pushJobInSavedJobs
                                }
                            />
                            <button>Apply</button>
                            <button>Remove</button>
                        </>
                    );
                })}
            </div>
        );
    }
}
