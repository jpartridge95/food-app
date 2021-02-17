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
                <img src={this.props.image} alt={this.props.title}></img>
                <p>Calories: {this.props.calories} kcal per Serving</p>
                <p>Protein: {this.props.protein} g per serving</p>
                <p>Carbohydrates: {this.props.carbs} g per serving</p>
                <p>Fat: {this.props.fat} g per serving</p>
            </div>
         );
    }
}

const mealCardBack = {
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    padding: "1rem"
}
 
export default MealCard;