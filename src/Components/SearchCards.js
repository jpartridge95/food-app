import React, { Component } from 'react';

class SearchCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={cardOuter}>
                <div style={floatLeft}>
                    <h2 style={cardTitle}>{this.props.title}</h2>
                    <img style={roundedImage} alt={this.props.title} src={this.props.image}></img>
                    <p></p>
                    <button>Add this item</button>
                </div>

                <div>
                    <p style={listTitle}>Values per serving</p>
                    <ul style={listStyle}>
                        <li>Calories: {this.props.calories} kcal</li>
                        <li>Protein: {this.props.protein} g</li>
                        <li>Fat: {this.props.fat} g</li>
                        <li>Carbohydrates: {this.props.carbs} g</li>
                    </ul>
                </div>

                <div>
                    <p>{this.props.description.slice(0, 250).replace(/(<([^>]+)>)/gi, "")}... <br /> <button>Tell me more, tell me more</button></p>
                </div>
            </div>
         );
    }
}

const cardTitle = {
    color: "green"
}

const roundedImage = {
    height: "17vh",
    borderRadius: "1rem",
    boxShadow: "2px 2px 10px grey"
}

const cardOuter = {
    border: "solid green 2px",
    padding: "1rem",
    borderRadius: "2rem",
    margin: "1rem",
    content: "",
    clear: "both",
    display: "table"
}

const floatLeft = {
    float: "left",
    marginRight: "2rem",
    width: "20vw"
}

const listStyle = {
    listStyleType: "none"
}

const listTitle = {
    fontSize: "1.2rem",

}

export default SearchCards;