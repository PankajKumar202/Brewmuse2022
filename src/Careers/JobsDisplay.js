import React, { Component, Fragment } from 'react';
import './careers.css'
import axios from 'axios';

const url = "https://brewmuse.herokuapp.com/jobs"


class JobsDisplay extends Component {

    constructor() {
        super();

        this.state = {
            jobs: '',
            jobData: ''
        }
    }

    keywordCareer = (event) => {
        let keywordVal = event.target.value;
        console.log(event.target.value)
        sessionStorage.setItem('keyword', keywordVal)
    }

    cityCareer = (event) => {
        let cityVal = event.target.value;
        console.log(event.target.value)
        sessionStorage.setItem('cityName', cityVal);
    }

    search = () => {

        let keywordVal = sessionStorage.getItem('keyword');
        let cityVal = sessionStorage.getItem('cityName');
        let jobUrl = "";
        if (keywordVal && cityVal) {
            jobUrl = `${url}?city_name=${cityVal}&profile=${keywordVal}`
        }
        else if (keywordVal) {
            jobUrl = `${url}?profile=${keywordVal}`
        }
        else {
            jobUrl = `${url}?city_name=${cityVal}`
        }
        axios.get(jobUrl)
            .then((res) => {
                this.setState({ jobs: res.data })
                console.log(this.state.jobs)
            })
    }


    jobsDisplay = (JobData) => {
        if (JobData) {
            console.log("JobData>>>>", JobData)
            return JobData.map((item, index) => {
                return (
                    <Fragment key={index}>

                        <strong><h4>{index + 1}:{item.profile}</h4></strong>
                        <h5><strong>City: </strong>{item.city_name}</h5>
                        <h5><strong>Location: </strong>{item.location}</h5>
                        <h5><strong>Description: </strong>{item.job_description}</h5>

                    </Fragment>

                )
            })
        }
    }


    render() {
        return (
            <div id="jobDiv">

                <input onChange={this.keywordCareer} type="search" id="keywordsJob" name="jobs" placeholder="Search Jobs By Keyword" />

                <input onChange={this.cityCareer} type="search" id="cityNameJob" name="jobs" placeholder="Search Jobs By Location" />

                <br />
                <button onClick={this.search} className="btn btn-outline-light" id="submitBtnJob" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Search</button>

                <div id="displayJobs">
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {this.jobsDisplay(this.state.jobs)}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default JobsDisplay;