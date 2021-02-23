import axios from 'axios';
import React, { Component } from 'react';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            status: null
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleServerResponse = this.handleServerResponse.bind(this)
    }

    handleServerResponse(ok, msg, form) {
        this.setState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        this.setState({submitting: true});
        axios({
            method: "POST",
            url: "https://formspree.io/f/mwkwjjnl",
            data: new FormData(form)
        })
        .then((response) => {
            this.handleServerResponse(true, "Thanks", form)
            this.setState({thankMessage: "Thank you for your feedback"})
            setTimeout(() => this.setState({thankMessage: ""}), 2000)
        })
        .catch((response) => {
            this.handleServerResponse(false, response.response.data.error, form)
        });
    }


    render() { 
        return ( 
            <div style={bgCard}>
                <div>
                    <button style={cardButton} onClick={this.props.toggleFeedbackVisible}>
                        X
                    </button>
                </div>

                <div>
                    <h1 style={cardTitle}>Want to give me some feedback?</h1>
                    <p style={cardBody}>
                        Any feedback, fill out the form below, hit send message and I will endeavour to get back
                        to you as quickly as possible.
                    </p>
                    <form onSubmit={this.onFormSubmit} style={formBody}>
                        <span>
                            <label>What type of feedback is it? </label>
                            <select name="dropdown">
                                <option value="positive">Positive Feedback</option>
                                <option value="negative">Complaints</option>
                                <option value="suggestion">Suggestions</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                        <span>
                            <label>What email address should I contact you on? </label>
                            <input name="email" type="email"></input>
                        </span>
                        {/* Go to formspree and set up form using axios and http response handler
                        && style out the form to look fresh */}
                        
                            <label>Leave a message</label>
                            <textarea name="message"></textarea>
                        
                        <input type="submit" value="Send Message"></input>
                    </form>
                    <p style={cardBody}>{this.state.thankMessage}</p>
                </div>
            </div>
         );
    }
}

const bgCard = {
    position: "absolute",
    height: "75vh",
    width: "75vw",
    zIndex: "3",
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    margin: "auto",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    borderRadius: "1rem",
    boxShadow: "2px 2px 30px grey"
}

const cardButton = {
    background: "none",
    border: "none",
    fontSize: "1.3rem",
    margin: "3rem 5rem",
    marginBottom: "0px"
}

const cardBody = {
    marginLeft: "5rem",
    color: "#002601",
    marginRight: "5rem"
}

const cardTitle = {
    fontSize: "3rem",
    marginTop: "0px",
    textAlign: "center",
    color: "green"
}

const formBody ={
    margin: "5rem",
    display: "flex",
    flexDirection: "column"
}
 
export default Feedback;