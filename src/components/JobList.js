import React from 'react';
import JobCard from './JobCard';
import './JobList.css';
import Pagination from '@material-ui/lab/Pagination';

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
    constructor(props) {
        super(props);
        this.state = {
            perPage: 5,
            currentPage: props.currentPage,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (event, value) => {
        const selectedPage = value;

        this.setState({
            currentPage: selectedPage,
        });

        this.props.setCurrentPage(selectedPage);
    };

    render(props) {
        const array = this.props.jobsArray;
        const pageCount = Math.ceil(array.length / this.state.perPage);
        let currentPage = this.state.currentPage;

        currentPage = currentPage > pageCount ? pageCount : currentPage;
        const offset = (currentPage - 1) * this.state.perPage;
        const slice = array.slice(offset, offset + this.state.perPage);
        return (
            <div>
                <p
                    className={
                        this.props.jobStatus
                            ? 'result-number-show'
                            : 'result-number-hide'
                    }
                >
                    results:{this.props.jobsArray.length}
                </p>
                <div>
                    { this.props.jobsArray.length === 0 && this.props.jobStatus 
                    ? <p>No jobs found</p>
                      :  
                        slice.map((jobObject) => (
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
                                this.props.toggleJobInSavedJobs(jobObject.id);
                            }}
                            isFavorite={jobObject.isFavorite}
                        />
                    ))}
                    {this.props.jobStatus && this.props.jobsArray.length !== 0 
                    ? (
                        <Pagination
                            count={pageCount}
                            variant="outlined"
                            onChange={this.handlePageClick}
                            defaultPage={currentPage}
                        />
                    ) : <p></p>

                    
                    }
                </div>
            </div>
            // <div className="list-container">
            // <p
            //     className={
            //         this.props.jobStatus
            //             ? 'result-number-show'
            //             : 'result-number-hide'
            //     }
            // >
            //     results:{this.props.jobsArray.length}
            // </p>
            // <div className={this.props.jobStatus ? 'scrollList' : ''}>
            //     <PaginationList
            //             data={this.props.jobsArray}
            //             pageSize={5}
            //             renderItem={(jobObject, key) => (
            // <JobCard
            //     logo={jobObject.company_logo_url}
            //     title={jobObject.title}
            //     salary={jobObject.salary}
            //     type={jobObject.job_type.split('_').join(' ')}
            //     location={jobObject.candidate_required_location}
            //     company={jobObject.company_name}
            //     date={jobObject.publication_date.slice(0, 10)}
            //     description={removeHtml(jobObject.description)}
            //     key={jobObject.id}
            //     url={jobObject.url}
            //     toggleJobInSavedJobs={() => {
            //         this.props.toggleJobInSavedJobs(
            //             jobObject.id
            //         );
            //     }}
            //     isFavorite={jobObject.isFavorite}
            // />
            //             )}
            //         />
            //         {/* {this.props.jobsArray.map((jobObject) => {
            //             return (
            //                 <JobCard
            //                     logo={jobObject.company_logo_url}
            //                     title={jobObject.title}
            //                     salary={jobObject.salary}
            //                     type={jobObject.job_type.split('_').join(' ')}
            //                     location={jobObject.candidate_required_location}
            //                     company={jobObject.company_name}
            //                     date={jobObject.publication_date.slice(0, 10)}
            //                     description={removeHtml(jobObject.description)}
            //                     key={jobObject.id}
            //                     url={jobObject.url}
            //                     toggleJobInSavedJobs={() => {
            //                         this.props.toggleJobInSavedJobs(
            //                             jobObject.id
            //                         );
            //                     }}
            //                     isFavorite={jobObject.isFavorite}
            //                 />
            //             );
            //         })} */}
            //    </div>
            // </div>
        );
    }
}
export default JobList;
