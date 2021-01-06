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

    getIconDependingOnFyleType = (file) => {
        if(file.type === "application/pdf"){
            return "data:image/png;base64,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"
        }
        else if(file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ){
            return "https://img.icons8.com/ios/452/doc.png"
        }
        else {
            return "data:image/png;base64,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"
        }

    }

    render() {
        return (
            <div>
                <div className="upload-cv-button-div">
                    <Button className="upload-cv-button"
                        variant="outlined"
                        onClick={this.handleOpen.bind(this)}
                        startIcon={<CloudUploadIcon />}>
                        Upload CV
                </Button>

                </div>

                <div upload-cv-row>
                    <DropzoneDialog
                        open={this.state.open}
                        onSave={this.handleSave.bind(this)}
                        acceptedFiles={['image/*', '.pdf', '.doc','.docx']}
                        showPreviews={true}
                        maxFileSize={5000000}
                        onClose={this.handleClose.bind(this)}
                    />
                </div>
                {
                    this.state.savedFiles.map(file =>
                <div>
                    <img src={this.getIconDependingOnFyleType(file)} alt="" width="50px" height="50px"></img>
                    <p>{file.name}</p>
                </div>
                    )}
            </div>
        );
    }
}