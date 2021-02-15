import React, { Component } from 'react';

class MealCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mealChosen: false,
            mealData: {}
        }
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.mealChosen 
                    ? 
                    <div>
                        <p>title</p>
                    </div>
                    :
                    <button onClick={this.props.makeFormSee}>Add A Meal</button> 
                }
            </div>
         );
    }
}
 
export default MealCard;