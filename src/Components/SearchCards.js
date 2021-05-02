import React, { Component } from 'react';

class SearchCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDescription: false
        }
        
        this.fullDescriptionTrue = this.fullDescriptionTrue.bind(this)
        this.fullDescriptionFalse = this.fullDescriptionFalse.bind(this)
    }

    fullDescriptionTrue() {
        this.setState(() => ({
            fullDescription: true
        }))
    }

    fullDescriptionFalse() {
        this.setState(() => ({
            fullDescription: false
        }))
    }

    render() { 
        return ( 
            <div className={"food-search-card"}>
                <div>
                    <h2>{this.props.title}</h2>
                    <img alt={this.props.title} src={this.props.image}></img>
                    <br/>
                    <button className={"append-meal"} id={this.props.id} onClick={this.props.handleSelect}>Add this item</button>
                </div>

                <div>
                    <p className={"food-search-card-title"}>Values per serving</p>
                    <ul>
                        <li><strong>Calories</strong>: {this.props.calories} kcal</li>
                        <li><strong>Protein</strong>: {this.props.protein} g</li>
                        <li><strong>Fat</strong>: {this.props.fat} g</li>
                        <li><strong>Carbohydrates</strong>: {this.props.carbs} g</li>
                    </ul>
                </div>

                <div>
                    {
                        this.state.fullDescription
                        ?
                        <p>{this.props.description.replace(/(<([^>]+)>)/gi, "")}... <br /> <button className={"tell-me-more"} onClick={this.fullDescriptionFalse}>Okay, that's enough</button></p>
                        :
                        <p>{this.props.description.slice(0, 250).replace(/(<([^>]+)>)/gi, "")}... <br /> <button className={"tell-me-more"} onClick={this.fullDescriptionTrue}>Tell me more, tell me more</button></p>
                    }
                </div>
            </div>
         );
    }
}

export default SearchCards;