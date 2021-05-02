import React, { Component } from 'react';
import "../index.css"

class About extends Component {

    render() {
        return (
            <div className={"card-content"}>
                <div>
                    <button className={"close-button"} onClick={this.props.toggleAboutVisible}>
                        X
                    </button>
                </div>

                <div className={"about-layout scrollable-div"}>
                    <h1>What we're about</h1>
                    <p>
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

export default About