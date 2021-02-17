import React, { Component } from 'react';
import SearchCards from "./SearchCards"


class SearchWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        }

    }

    render() { 
        let onLastPage = (Math.ceil(this.props.totalResults / 25) === (this.props.page + 1))
        let isPageNumberOne = (this.props.page === 0)
        return ( 
            <div style={bgCard}>
                <button onClick={this.props.hideSearchWindow} style={closeButton}>X</button>
                <div style={cardHolder}>
                    {this.props.data.map((elem) => 
                        <SearchCards 
                            key={elem.id}
                            id={elem.id}
                            title={elem.title} 
                            image={elem.image}
                            description={elem.description}
                            calories={elem.nutrition.calories}
                            protein={elem.nutrition.protein}
                            carbs={elem.nutrition.carbs}
                            fat={elem.nutrition.fat}
                            handleSelect={(() => {
                                this.setState(() => 
                                    ({selected: {
                                        id: elem.id,
                                        calories: elem.nutrition.calories,
                                        protein: elem.nutrition.protein,
                                        fat: elem.nutrition.fat,
                                        carbs: elem.nutrition.carbs,
                                        image: elem.image,
                                        title: elem.title
                                    }
                                }))
                                setTimeout(() => this.props.getFoodId(this.state.selected), 200)
                                this.props.pageReset()
                            })}
                        />
                    )}
                </div>
                <div style={controlButtons}>
                    {
                        isPageNumberOne
                        ?
                        <button style={buttonFlex} type="button" disabled>{"<"}</button>
                        :
                        <button style={buttonFlex} onClick={this.props.handleDecrement}>{"<"}</button>
                    }
                    <p style={wordFlex}>Page no. {parseInt(this.props.page) + 1} {this.state.selected.calories}</p>
                    {
                        onLastPage
                        ?
                        <button style={buttonFlex} type="button" disabled>{">"}</button>
                        :
                        <button style={buttonFlex} onClick={this.props.handleIncrement}>{">"}</button>
                    }
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