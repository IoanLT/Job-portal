import React, { Component, useEffect } from 'react';
import './CoverLetterBuilder.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CVuploader from './DropzoneDialog';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '75ch',
    },
  },

  root_alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: '75ch',
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));





export default function CoverLetterBuilder({ savedJobsArray }) {

  const classes = useStyles();
  const [coverLetterBody, setCoverLetterBody] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState('');
  const [open, setOpen] = React.useState(false);



  let defaultCoverLetterBody = "Re: Application for the position of [job_position]";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "Dear [company_name],";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "I am writing in application for the front end developer position at [company_name] as advertised in Remotive.io.";
  defaultCoverLetterBody += " My training and experience in the field of computer programming and web design, make me the perfect candidate for the job. I know that I would be a valuable addition to the team at [company_name].";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "I have a certificate from Wild Code School and I am ready to start my new career as a [job_position]. I have advanced knowledge of different web development programming languages and responsive design techniques.";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "Thank you for your time and consideration. I look forward to hearing from you.";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "\n";
  defaultCoverLetterBody += "Sincerely,";


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleCoverLetterBodyChange = (event) => {
    setCopied(false);
    let introCoverLetterBody = event.target.value;
    setCoverLetterBody(introCoverLetterBody);

  };


  const handleClickCopy = () => {
    setCopied(true);
    setOpen(true);
  }



  useEffect(() => {
    setCoverLetterBody(defaultCoverLetterBody);
  }, []);

  const captureSelectedSavedJob = (event) => {
    const selectedJobFromSelect = event.target.value;
    setSelectedJob(selectedJobFromSelect);
    let templateWords = defaultCoverLetterBody;


    if (selectedJobFromSelect !== "none") {
      const toReplaceCompany = /\[company_name\]/gi;
      const toReplaceJobPosition = /\[job_position\]/gi;
      templateWords = templateWords.replace(toReplaceCompany, selectedJobFromSelect.company_name);
      templateWords = templateWords.replace(toReplaceJobPosition, selectedJobFromSelect.title);
    }
    setCoverLetterBody(templateWords);

  };


  return (
    <div>
      <div >
        <form className={classes.root} noValidate autoComplete="off">
          <div className="cover-letter-container">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Choose from saved jobs</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedJob}
                onChange={captureSelectedSavedJob}
                label="Choose from saved jobs"
              >
                <MenuItem value="none">
                  <em>None</em>
                </MenuItem>
                {savedJobsArray.map((jobObject) => <MenuItem value={jobObject}>{jobObject.company_name} - {jobObject.title}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Cover Letter"
              multiline
              rows={20}
              defaultValue="Default Value"
              value={coverLetterBody}
              onChange={handleCoverLetterBodyChange}
              variant="outlined"
            />
            <CopyToClipboard text={coverLetterBody}
              onCopy={handleClickCopy}>
              <Button variant="contained" color="primary">Copy to clipboard</Button>
            </CopyToClipboard>
            {copied ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Cover letter copied to clipboard!
        </Alert>
            </Snackbar> : null}
            <div className={classes.root_alert}>



            </div>

          </div>
        </form>
      </div>
      <CVuploader />
    </div>
  )
}



