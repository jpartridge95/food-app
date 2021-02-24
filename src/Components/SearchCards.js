import React, { Component } from 'react';

class SearchCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDescription: false
        }
        
        this.fullDescriptionTrue = this.fullDescriptionTrue.bind(this)
        this.fullDescriptionFalse = this.fullDescriptionFalse.bind(this)
    }

    fullDescriptionTrue() {
        this.setState(() => ({
            fullDescription: true
        }))
    }

    fullDescriptionFalse() {
        this.setState(() => ({
            fullDescription: false
        }))
    }

    render() { 
        return ( 
            <div style={cardOuter}>
                <div>
                    <h2 style={cardTitle}>{this.props.title}</h2>
                    <img style={roundedImage} alt={this.props.title} src={this.props.image}></img>
                    <p></p>
                    <button id={this.props.id} onClick={this.props.handleSelect}>Add this item</button>
                </div>

                <div>
                    <p style={listTitle}>Values per serving</p>
                    <ul style={listStyle}>
                        <li>Calories: {this.props.calories} kcal</li>
                        <li>Protein: {this.props.protein} g</li>
                        <li>Fat: {this.props.fat} g</li>
                        <li>Carbohydrates: {this.props.carbs} g</li>
                    </ul>
                </div>

                <div>
                    {
                        this.state.fullDescription
                        ?
                        <p>{this.props.description.replace(/(<([^>]+)>)/gi, "")}... <br /> <button onClick={this.fullDescriptionFalse}>Okay, that's enough</button></p>
                        :
                        <p>{this.props.description.slice(0, 250).replace(/(<([^>]+)>)/gi, "")}... <br /> <button onClick={this.fullDescriptionTrue}>Tell me more, tell me more</button></p>
                    }
                </div>
            </div>
         );
    }
}

const cardTitle = {
    color: "green"
}

const roundedImage = {
    height: "17vh",
    borderRadius: "1rem",
    boxShadow: "2px 2px 10px grey"
}

const cardOuter = {
    border: "solid green 2px",
    padding: "1rem",
    borderRadius: "2rem",
    margin: "1rem",
    width: "32vw",
    minWidth: "270px"
}

const listStyle = {
    listStyleType: "none"
}

const listTitle = {
    fontSize: "1.2rem",

}

export default SearchCards;