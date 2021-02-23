import React from 'react';
import { Component } from 'react';



class Title extends Component {

    render() {
        return ( 
            <header style={titleBack}> 
            <div style={blockLeft}>
                <h1 style={titleText}>Thought for Food {this.props.numCards}</h1>
                <p style={subTitle}>Powered by Spoonacular and quickChart.io</p>
            </div>

            <div style={blockRight}>
                <button style={rightWords} onClick={this.props.toggleAboutVisible}>About</button>
                <button style={rightWords} onClick={this.props.toggleFeedbackVisible}>Feedback</button>
            </div>
        </header>
            );
    }
}
 
export default Title;

const blockLeft = {
    flex: "1 0 auto",
    display: "block"
}

const blockRight ={
    flex: "0 1 auto",
    display: "flex",
    flexDirection: "column",

}

const rightWords = {
    flex: "1 0 auto",
    marginTop: "0.3rem",
    marginBottom: "0.1rem",
    marginRight: "3rem",
    color: "#002601",
    background: "none",
    border: "none"
}

const titleBack = {
    backgroundColor: "rgba(245, 245, 245, 0.6)",
    display: "flex",
    flexDirection: "row",
    overflow: "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    borderBottom: "1px solid grey",
    boxShadow: "2px 2px 30px grey"
}

const titleText = {
    color: "green",
    marginLeft: "2rem"
}

const subTitle = {
    color: "#002601",
    fontSize: "0.8rem",
    marginLeft: "1.8rem"
}

