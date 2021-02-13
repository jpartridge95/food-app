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
                    <h3>Food Title</h3>
                    <img src="#"></img>
                </div>

                <div>
                    <p>Here is where I will render a short description of the recipe in question</p>
                </div>

                <div>
                    <button>Tell me more, tell me more</button>
                    <button>Add to meal plan</button>
                </div>
            </div>
         );
    }
}
 
export default SearchCards;