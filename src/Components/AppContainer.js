import React, { Component } from 'react';
import GraphContainer from "./GraphContainer"
import MealContainer from "./MealContainer"
import axios from "axios"

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carbs: 0,
            fat: 0,
            protein: 0,
            calories: 0
         }
        
        this.handleMealChange = this.handleMealChange.bind(this)
    }

    handleMealChange(e) {
        this.setState(() => ({
            carbs: e.target.carbs,
            fat: e.target.fat,
            protein: e.target.protein,
            calories: e.target.protein
        }))
    }




    render() { 
        return (
            <container>
                <MealContainer 
                    carbs={this.state.carbs} 
                    fat={this.state.fat} 
                    protein={this.state.protein} 
                    calories={this.state.calories}
                    onChange={this.handleMealChange}/>
                <GraphContainer 
                    carbs={this.state.carbs} 
                    fat={this.state.fat} 
                    protein={this.state.protein} 
                    calories={this.state.calories}/>
            </container>
        );
    }
}
 
export default AppContainer;