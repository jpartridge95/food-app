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
                <button onClick={this.props.hideSearchWindow} style={closeButton}>X</button>
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
                <div style={controlButtons}>
                    <button style={buttonFlex}>{"<"}</button>
                    <p style={wordFlex}>Page no. {parseInt(this.props.page) + 1}</p>
                    <button style={buttonFlex}>{">"}</button>
                </div>
            </div>
         );
    }
}

const closeButton = {
    height: "1.5rem"
}

const bgCard = {
    position: "fixed",
    display: "flex",
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
    top: "3vh",
    left: "0",
    right: "0",
    margin: "auto",
    overflow: "scroll",
    boxShadow: "2px 2px 15px grey",
    borderRadius: "1rem"
}

const controlButtons = {
    width: "50vw",
    height: "4vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "1vh",
    left: "0",
    right: "0",
    margin: "auto",
    Align: "center"
}

const buttonFlex = {
    flex: "1 0 auto"
}

const wordFlex = {
    flex: "1 0 auto",
    textAlign: "center",
    
}

export default SearchWindow;