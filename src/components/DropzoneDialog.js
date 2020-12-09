import React, { Component } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './DropzoneDialog.css';

export default class CVuploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            savedFiles: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        let previousSavedFiles = this.state.savedFiles;
        files.forEach(element => {
            previousSavedFiles.push(element);

        });
        console.log(previousSavedFiles);
        this.setState({
            savedFiles: previousSavedFiles,
            open: false
        })

        //Saving files to state for further use and closing Modal.

    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div>
                <div className="upload-cv-button">
                    <Button
                        variant="outlined"
                        onClick={this.handleOpen.bind(this)}
                        startIcon={<CloudUploadIcon />}>
                        Upload cv
                </Button>

                </div>

                <div upload-cv-row>
                    <DropzoneDialog
                        open={this.state.open}
                        onSave={this.handleSave.bind(this)}
                        acceptedFiles={['image/*', '.pdf', '.doc']}
                        showPreviews={true}
                        maxFileSize={5000000}
                        onClose={this.handleClose.bind(this)}
                    />
                </div>
                {
                    this.state.savedFiles.map(file =>
                <div>
                    <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="" width="50px" height="50px"></img>
                    <p>{file.name}</p>
                </div>
                    )}
            </div>
        );
    }
}