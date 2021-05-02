import React from 'react';
import { Component } from 'react';



class Title extends Component {

    render() {
        return ( 
            <header className={"nav-bar"}> 
            <div className={"left-block"}>
                <h1 className={"title-text"}>Thought for Food {this.props.numCards}</h1>
                <p>Powered by Spoonacular and quickChart.io</p>
            </div>

            <div className={"right-block"}>
                <button className={"nav-buttons"} onClick={this.props.toggleAboutVisible}>About</button>
                <button className={"nav-buttons"} onClick={this.props.toggleFeedbackVisible}>Feedback</button>
            </div>
        </header>
            );
    }
}
 
export default Title;

