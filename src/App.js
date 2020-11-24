import './App.css';
import React from 'react';
import JobList from './components/JobList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  

  render() {
    return (
      <div>
        <h1>Hello Chucks</h1>
     
        <JobList />
      </div>);
  }
}


export default App;
