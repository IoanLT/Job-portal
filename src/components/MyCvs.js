import React, { Component } from 'react';

import CVuploader from './DropzoneDialog' 

class MyCvs extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
        <div>
      <CVuploader />
      </div>
    )
  }
}
 
export default MyCvs;

// export default class MyCvs extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>My CVs</h1>
//                 <p>
//                     <a href="https://www.inspiringthefuture.org/wp-content/uploads/2014/12/examples_of_good_and_bad_cvs.pdf">
//                         CV 2
//                     </a>
//                 </p>

//             </div>
//         );
//     }
// }
