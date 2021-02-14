import React, { Component } from 'react';
import SearchCards from "./SearchCards"


class SearchWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() { 
        return ( 
            <div style={bgCard}>
                <div style={cardHolder}>
                    {this.props.data.map((elem) => 
                        <SearchCards 
                            id={elem.id} 
                            title={elem.title} 
                            image={elem.image}
                            description={elem.description}
                            calories={elem.nutrition.calories}
                            protein={elem.nutrition.protein}
                            carbs={elem.nutrition.carbs}
                            fat={elem.nutrition.fat}
                        />
                    )}
                </div>
                <div>
                    <button>{"<"}</button>
                    <p>Page no. {parseInt(this.props.page) + 1}</p>
                    <button>{">"}</button>
                </div>
            </div>
         );
    }
}

const bgCard = {
    position: "fixed",
    height: "82vh",
    width: "82vw",
    zIndex: "3",
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    margin: "auto",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    borderRadius: "1rem",
    boxShadow: "2px 2px 30px grey"
}

const cardHolder = {
    position: "absolute",
    height: "72vh",
    width: "78vw",
    top: "2vh",
    left: "0",
    right: "0",
    margin: "auto"
}

export default SearchWindow;