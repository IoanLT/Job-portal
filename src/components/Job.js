import React, { Component } from 'react';
import Button from './Button'
import Button2 from './Button2'

let logoImage = 'https://media.istockphoto.com/vectors/building-icon-vector-id873392526?b=1&k=6&m=873392526&s=612x612&w=0&h=5j7gUgw6j25xi0wgMQnX9FkyWd4nDpdzaOe-wlBW2J8=';
// Job Card
class Job extends Component{
    state = {
        showDetails : false
    }

    showModal = () =>{
        this.setState({showDetails: true})
      }
   
    closeModal = ()=> {
       this.setState({showDetails: false})
      }


render(){
   
    return ( 
        <div className="job-container">
            <div>
                <img className='job-logo' src={this.props.logo===undefined?logoImage:this.props.logo} alt={this.props.company}/>
            </div>
            <div>
            <h2 className="job-title">{this.props.title} {this.props.type}</h2>
            <h3 className="job-company">{this.props.company}</h3>
           
            <p>{this.props.salary}</p>
            <h4 className='job-location'>{this.props.location}</h4>
            <Button text="See full job description" action={this.showModal}/>
            <p className='job-date'>{this.props.date}</p>
           
            </div>
            
            {
                this.state.showDetails &&
                <div className='job-description'>
                    <Button2 text="&#10006;" action={this.closeModal}/>
                    <h2 className="job-title">{this.props.title}</h2>
                    <p>{this.props.description}</p>
                     
                </div>
            }
        </div> 
    );    
}
}
    
export default Job;