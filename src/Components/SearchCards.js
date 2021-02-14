import React, { Component } from 'react';

class SearchCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image}></img>
                    <button>Add to meal plan</button>
                </div>

                <div>
                    <p>{this.props.description.slice(0, 150)}...</p>
                    <p>Values per serving</p>
                    <ul>
                        <li>Calories: {this.props.calories} kcal</li>
                        <li>Protein: {this.props.protein} g</li>
                        <li>Fat: {this.props.fat} g</li>
                        <li>Carbohydrates: {this.props.carbs} g</li>
                    </ul>
                </div>

                <div>
                    <button>Tell me more, tell me more</button>
                </div>
            </div>
         );
    }
}
 
export default SearchCards;