import React, { Component } from 'react';

class MealCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div className={"meal-card-container"}>
                <h4>{this.props.title}</h4>
                <img src={this.props.image} alt={this.props.title} className={"food-picture"}></img>
                <p>Calories: {this.props.calories} kcal per Serving</p>
                <p>Protein: {this.props.protein} g per serving</p>
                <p>Carbohydrates: {this.props.carbs} g per serving</p>
                <p>Fat: {this.props.fat} g per serving</p>
            </div>
         );
    }
}
 
export default MealCard;