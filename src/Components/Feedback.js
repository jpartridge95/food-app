import React, { Component } from 'react';

class Feedback extends Component {
    constructor(props) {
        super(props);
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
                        Contact me on blah blah blah
                    </p>
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
    boxShadow: "2px 2px 30px grey",
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

 
export default Feedback;