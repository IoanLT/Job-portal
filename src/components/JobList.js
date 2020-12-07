import React from 'react';
import JobCard from './JobCard';
import './JobList.css';
import PaginationList from 'react-pagination-list';

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

class JobList extends React.Component {
    render(props) {
        return (
            <div className="list-container">
                <p
                    className={
                        this.props.jobStatus
                            ? 'result-number-show'
                            : 'result-number-hide'
                    }
                >
                    results:{this.props.jobsArray.length}
                </p>
                <div className={this.props.jobStatus ? 'scrollList' : ''}>
                <PaginationList 
                        data={this.props.jobsArray}
                        pageSize={5}
                        renderItem={(jobObject, key) => (
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
                                url={jobObject.url}
                                toggleJobInSavedJobs={() => {
                                    this.props.toggleJobInSavedJobs(
                                        jobObject.id
                                    );
                                }}
                                isFavorite={jobObject.isFavorite}
                            />
                        )}
                    />
                    {/* {this.props.jobsArray.map((jobObject) => {
                        return (
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
                                url={jobObject.url}
                                toggleJobInSavedJobs={() => {
                                    this.props.toggleJobInSavedJobs(
                                        jobObject.id
                                    );
                                }}
                                isFavorite={jobObject.isFavorite}
                            />
                        );
                    })} */}
               </div>
            </div>
        );
    }
}
export default JobList;
