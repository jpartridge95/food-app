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
            <div className={"search-pop-up"}>
                <button onClick={this.props.hideSearchWindow} className={"close-button"}>X</button>
                <div className={"search-window recipe-div"}>
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
                <div className={"button-wrapper"}>
                    {
                        isPageNumberOne
                        ?
                        <button id="disabled" type="button" disabled>{"<"}</button>
                        :
                        <button onClick={this.props.handleDecrement}>{"<"}</button>
                    }
                    <p>Page no. {parseInt(this.props.page) + 1} {this.state.selected.calories}</p>
                    {
                        onLastPage
                        ?
                        <button id="disabled" type="button" disabled>{">"}</button>
                        :
                        <button onClick={this.props.handleIncrement}>{">"}</button>
                    }
                </div>
            </div>
         );
    }
}

export default SearchWindow;