import React, { Component } from 'react';


class IngredientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h4>{this.props.data.title}</h4>
                {
                    this.props.data.ingredients.map((elem) => 
                    <p>{elem[0]}: {elem[1]} {elem[2]}</p>
                    )
                }
            </div>
        );
    }
}
 
export default IngredientItem;