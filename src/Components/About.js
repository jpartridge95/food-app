import React, { Component } from 'react';
import "../index.css"

class About extends Component {
    
    render() {
        return (
            <div style={bgCard}>
                <div>
                    <button style={cardButton} onClick={this.props.toggleAboutVisible}>
                        X
                    </button>
                </div>

                <div className="scrollable-div" style={aboutDiv}>
                    <h1 style={cardTitle}>What we're about</h1>
                    <p style={cardBody}>
                        Hi, <br />
                        My name is Jordan, and my mission is to make meals easier by removing the worst 
                        part of cooking, the planning stage. <br /> <br />
                        At every stage planning is a pain, from trying to decide what to cook
                        (especially when on a specific diet), to creating a shopping list, then actually
                        going to the store to buy them; invariably forgetting half <br /> <br />
                        Which brings us to the question you might be asking yourself, what exactly
                        does this website do? <br /> <br />
                        Well it helps with planning meals, providing details on macronutrients and giving
                        a shopping list to help you know which ingredients to pick up. <br /> <br /> 
                        Hit Add meal to get started
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
    margin: "1rem"
}

const cardBody = {
    color: "#002601"
}

const cardTitle = {
    fontSize: "2.5rem",
    marginTop: "0px",
    textAlign: "center",
    color: "green"
}

const aboutDiv = {
    overflow: "scroll",
    position: "absolute", 
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "4rem"
}

export default About