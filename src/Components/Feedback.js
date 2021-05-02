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
            this.setState({thankMessage: "Ooops something went wrong here email me directly at \n jordanpartridge@gmail.com"})
            setTimeout(() => this.setState({thankMessage: ""}), 5000)
        });
    }


    render() { 
        return ( 
            <div className={"card-content"}>
                <div>
                    <button className={"close-button"} onClick={this.props.toggleFeedbackVisible}>
                        X
                    </button>
                </div>

                <div className={"pop-up-inner-container"}>
                    <h1>Feedback</h1>
                    <p className={"pop-up-content"}>
                        Any feedback, fill out the form below, hit send message and I will endeavour to get back
                        to you as quickly as possible.
                    </p>
                    <form onSubmit={this.onFormSubmit} className={"feedback-layout"}>
                        <span>
                            <label>What type of feedback is it? </label><br/>
                            <select name="dropdown">
                                <option value="positive">Positive Feedback</option>
                                <option value="negative">Complaints</option>
                                <option value="suggestion">Suggestions</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                        <span>
                            <label>What email address should I contact you on? </label><br/>
                            <input name="email" type="email" required></input>
                        </span>
                        
                            <label>Leave a message</label>
                            <textarea name="message" required></textarea>
                        
                        <input className={"form-submit"} type="submit" value="Send Message"></input>
                    </form>
                    <p className={"pop-up-content"}>{this.state.thankMessage}</p>
                </div>
            </div>
         );
    }
}
 
export default Feedback;