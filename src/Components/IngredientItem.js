import React, { Component } from 'react';


class IngredientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={itemSeperator}>
                <h4 style={titleAndParagraph} >{this.props.data.title}</h4>
                {
                    this.props.data.ingredients.map((elem) => 
                    <p style={titleAndParagraph} >{elem[0]}: {elem[1]} {elem[2]}</p>
                    )
                }
            </div>
        );
    }
}
 
const itemSeperator = {
    border: "2px solid green",
    marginBottom: "5px",
    backgroundColor: "rgba(250,250,250,0.4)",
    borderRadius: "0.5rem"
}

const titleAndParagraph = {
    marginLeft: "5px"
}

export default IngredientItem;