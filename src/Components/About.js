import React, { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={bgCard}>
                <div>
                    <button style={cardButton} onClick={this.props.toggleAboutVisible}>
                        X
                    </button>
                </div>

                <div>
                    <h1 style={cardTitle}>What we're about</h1>
                    <p style={cardBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

// Using this method of adding styling for now, will change at a later date

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

export default About