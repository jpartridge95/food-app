import axios from 'axios';
import React, { Component } from 'react';
import IngredientItem from './IngredientItem';

class IngredientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalIngredients: [],
            currIngredients: []
        }
    }

    componentDidUpdate(prev) {
        if (this.props.dataList !== prev.dataList) {
            this.setState(() => ({
                currIngredients: []
            }))
            let mostRecentAdd = this.props.dataList.slice().pop()
            let mostRecentId = mostRecentAdd.id
            let mostRecentTitle = mostRecentAdd.title
            axios.get(`https://api.spoonacular.com/recipes/${mostRecentId}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                response.data.ingredients.forEach((elem) => {
                    this.setState((state) => ({
                        currIngredients: [...state.currIngredients, [elem.name, 
                            elem.amount.metric.value,
                            elem.amount.metric.unit
                        ]]
                    }))
                })
                this.setState((state) => ({
                    totalIngredients: [...state.totalIngredients, {
                        title: mostRecentTitle,
                        ingredients: state.currIngredients
                    }]
                }))
                console.log(this.state.totalIngredients)
            })
            .catch((error) => console.log(error))
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.totalIngredients.map((elem) => 
                <IngredientItem data={elem}/>
                )}
            </div>
         );
    }
}
 
export default IngredientList;