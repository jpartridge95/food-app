import React, { Component } from 'react';

class MealCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div style={mealCardBack}>
                <p>{this.props.title}</p>
                <img src={this.props.image} alt={this.props.title} style={mealCardImage}></img>
                <p style={mealCardParagraphs}>Calories: {this.props.calories} kcal per Serving</p>
                <p style={mealCardParagraphs}>Protein: {this.props.protein} g per serving</p>
                <p style={mealCardParagraphs}>Carbohydrates: {this.props.carbs} g per serving</p>
                <p style={mealCardParagraphs}>Fat: {this.props.fat} g per serving</p>
            </div>
         );
    }
}

const mealCardBack = {
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    padding: "0.4rem",
    borderRadius: "1.5rem",
    height: "29.5vh",
    boxShadow: "2px 2px 30px grey",
    top: "0",
    bottom: "0",
    marginTop: "auto",
    marginBottom: "auto",
    minWidth: "250px"
}

const mealCardImage = {
    height: "10vh",
    width: "auto",
    borderRadius: "5vh",
    boxShadow: "2px 2px 30px grey"
}

const mealCardParagraphs = {
    fontSize: "0.7rem",
    margin: "0.2rem"
}
 
export default MealCard;