import React, { Component } from 'react';


class IngredientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={"ingredient-block"}>
                <h4 >{this.props.data.title}</h4>
                {
                    this.props.data.ingredients.map((elem) => 
                    <p><span className={"ingredient-name"}>{elem[0]}</span>: <br/> {elem[1]} {elem[2]}</p>
                    )
                }
            </div>
        );
    }
}

export default IngredientItem;