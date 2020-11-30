import React, { Component } from 'react';

export default class SavedJobs extends Component {
    render(props) {
        return (
            <div>
                <h1>Saved jobs</h1>
                {this.props.savedJobsArray.map((job) => {
                    return <p>{job}</p>;
                })}
            </div>
        );
    }
}
