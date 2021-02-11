import React, { Component } from 'react';
import axios from "axios";

class MealContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            httpResponse: []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        this.setState((state) => (
            state.httpResponse = []
        ))
        axios({
            method: "get",
            url: "https://api.spoonacular.com/recipes/complexSearch?query=sausage&number=2&apiKey=ac6829b0e2fc494983e3f23a6a0fcb8c",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            let foodReply = response.data.results.map((element) => element.title)
            this.setState(() => ({
                httpResponse: foodReply
            }))
            console.log(this.state.httpResponse)
        })
        .catch(error => console.log(error))
    }


    render() {
        return ( 
            <div response={this.state.httpResponse} style={{position: "fixed", left: "500px", top: "500px"}}>
                <button onClick={this.handleButtonClick}>Click Me</button>
                <h3>Titles for 2 Sausage results</h3>
                <ul>{this.state.httpResponse.map((elem) => <li key={elem}>{elem}</li>)}</ul>
            </div>
         );
    }
}
 
export default MealContainer;

// Add seperate component to pass props to, which will create new elements on the regular