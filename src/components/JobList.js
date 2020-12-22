import React from 'react';
import JobCard from './JobCard';
import './JobList.css';
import Pagination from '@material-ui/lab/Pagination';
import GoogleMapReact from 'google-map-react';
import coordinates from './Coordinates';

const link = 'https://assets.stickpng.com/images/5888925dbc2fc2ef3a1860ad.png'
const AnyReactComponent = ({ icon }) => <img width='12px' src={icon}/>;

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
            center: {
                lat: 41,
                lng: 20
              },
              zoom: 2
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

//logic to get coordinates for result
        let arrayWithCoordinates = [];
                 array.forEach((el)=> coordinates.forEach((el2)=> {
                     if(el.candidate_required_location === el2.name){
                         arrayWithCoordinates.push(el2)
                     }
                 }))

        return (
            <div className='job-results'>
              
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
                <div className={this.props.jobStatus && this.props.jobsArray.length !== 0 ? 'map': 'no-map'}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBtEhCs2uqJ9L2RjQYogkRAighXKfL9mYo'}}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    >
                 
             {
                arrayWithCoordinates.map(country=> 
                <AnyReactComponent
                lat={country.latlng[0]}
                lng={country.latlng[1]}
                icon={link}
            />
            
            )
            } 
                    </GoogleMapReact>
               </div>

            </div>
           
        );
    }
}
export default JobList;
