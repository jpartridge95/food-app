import React, { Component } from 'react';

class About extends Component {
    
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
                        Hi, <br />
                        My name is Jordan, the sole founder and creator of Thought for Food and I'm a 
                        slightly fanatical home chef. My knives are sharp, my wits are dull and
                        I love talking and cooking food. However there has always been one element of 
                        cooking which I've always found a hassle - Planning. <br /> <br />
                        At every stage planning is a pain, from trying to decide what to cook
                        (especially when on a specific diet), to creating a shopping list, then actually
                        going to the store to buy them. Which is why I decided to create this. My 
                        initial plan was to create something for myself to help me make informed decisions
                        before heading to the store and getting lost in the aisles, ultimately forgetting
                        to pick up half the ingredients for the dish I'm creating that night. <br /> <br />
                        Which brings us to the question you might be asking yourself, what exactly
                        does this website do? <br />
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