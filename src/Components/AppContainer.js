import React, { Component } from 'react';
import GraphContainer from "./GraphContainer"
import axios from "axios"
import SearchWindow from './SearchWindow';
import MealCard from './MealCard';
import IngredientList from "./IngredientList";
import "../App.css"

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            searchWindowVisible: false,
            data: [],
            cardData: [],
            mealVals: [],
            total: {
                calories: 0,
                carbs: 0,
                fat: 0,
                protein: 0
            },
            page: 0
         }
        
        this.hideSearchWindow = this.hideSearchWindow.bind(this);
        this.makeFormSee = this.makeFormSee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.makeFormHide = this.makeFormHide.bind(this);
        this.setFoodId = this.setFoodId.bind(this);
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.resetPageToZero = this.resetPageToZero.bind(this)
    }

    hideSearchWindow() {
        this.setState(() => ({
            searchWindowVisible: false,
            page: 0
        }))
    }

    makeFormSee() {
        this.setState(() => ({
            formVisible: true
        }))
    }

    makeFormHide() {
        this.setState(() => ({
            formVisible: false,
            vegetarian: "",
            vegan: "",
            glutenFree: ""
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(() => ({
            vegetarian: "",
            vegan: "",
            glutenFree: "",
            formVisible: false,
            data: []
        }))
        const url = "https://api.spoonacular.com/recipes/complexSearch"
        let config = {
            params: {
                apiKey: process.env.REACT_APP_API_KEY,
                query: this.state.query,
                maxCalories: this.state.maxCal || 9999,
                minCalories: this.state.minCal || 0,
                maxFat: this.state.maxFat || 9999,
                minFat: this.state.minFat || 0,
                maxCarbs: this.state.maxCarb || 9999,
                minCarbs: this.state.minCarb || 0,
                minProtein: this.state.minProt || 0,
                maxProtein: this.state.maxProt || 9999,
                diet: `${this.state.vegetarian},${this.state.vegan},${this.state.glutenFree}`,
                addRecipeInformation: true,
                number: 25,
                offset: this.state.page * 25,
                limitLicense: false
            } 
        }
        
        axios.get(url, config)
        .then((response) => {
            console.log(response);
            let maxResults = response.data.totalResults
            const results = response.data.results.map((elem) => ({
                id: elem.id,
                title: elem.title,
                image: elem.image,
                description: elem.summary,
                nutrition: {
                    calories: elem.nutrition.nutrients[0].amount,
                    protein: elem.nutrition.nutrients[1].amount,
                    fat: elem.nutrition.nutrients[2].amount,
                    carbs: elem.nutrition.nutrients[3].amount
                }
            }))
            console.log(results)

            this.setState(() => ({
                data: results,
                totalResults: maxResults
            }))
            
        })
        .catch((error) => console.log(error))

        this.setState(() => ({
            searchWindowVisible: true
        }))
    }

    handleChange(e) {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    setFoodId(id) {
        this.setState((state) => ({
            mealVals: [...state.mealVals, {
                calories: id.calories,
                fat: id.fat,
                protein: id.protein,
                carbs: id.carbs
            }],
            total: {
                calories: state.total.calories += id.calories || id.calories,
                fat: state.total.fat += id.fat || id.fat,
                carbs: state.total.carbs += id.carbs || id.carbs,
                protein: state.total.protein += id.protein || id.protein
            },
            cardData: [...state.cardData, id],
            searchWindowVisible: false,

        }))
        setTimeout(() => console.log(this.state.total.fat), 100)
    }

    incrementPage() {
        this.setState((state) => ({
            page: state.page += 1
        }))
        setTimeout(() => {
            const url = "https://api.spoonacular.com/recipes/complexSearch"
            let config = {
                params: {
                    apiKey: process.env.REACT_APP_API_KEY,
                    query: this.state.query,
                    maxCalories: this.state.maxCal || 9999,
                    minCalories: this.state.minCal || 0,
                    maxFat: this.state.maxFat || 9999,
                    minFat: this.state.minFat || 0,
                    maxCarbs: this.state.maxCarb || 9999,
                    minCarbs: this.state.minCarb || 0,
                    minProtein: this.state.minProt || 0,
                    maxProtein: this.state.maxProt || 9999,
                    diet: `${this.state.vegetarian},${this.state.vegan},${this.state.glutenFree}`,
                    addRecipeInformation: true,
                    number: 25,
                    offset: this.state.page * 25,
                    limitLicense: false
                } 
            }
            axios.get(url, config)
            .then((response) => {
                const results = response.data.results.map((elem) => ({
                    id: elem.id,
                    title: elem.title,
                    image: elem.image,
                    description: elem.summary,
                    nutrition: {
                        calories: elem.nutrition.nutrients[0].amount,
                        protein: elem.nutrition.nutrients[1].amount,
                        fat: elem.nutrition.nutrients[2].amount,
                        carbs: elem.nutrition.nutrients[3].amount
                    }
                }))

                this.setState(() => ({
                    data: results
                })) 
            })
            .catch((error) => console.log(error))

            this.setState(() => ({
                searchWindowVisible: true
            }))
        }, 100)

    }

    decrementPage() {
        this.setState((state) => ({
            page: state.page -= 1
        }))
        setTimeout(() => {
            const url = "https://api.spoonacular.com/recipes/complexSearch"
            let config = {
                params: {
                    apiKey: process.env.REACT_APP_API_KEY,
                    query: this.state.query,
                    maxCalories: this.state.maxCal || 9999,
                    minCalories: this.state.minCal || 0,
                    maxFat: this.state.maxFat || 9999,
                    minFat: this.state.minFat || 0,
                    maxCarbs: this.state.maxCarb || 9999,
                    minCarbs: this.state.minCarb || 0,
                    minProtein: this.state.minProt || 0,
                    maxProtein: this.state.maxProt || 9999,
                    diet: `${this.state.vegetarian},${this.state.vegan},${this.state.glutenFree}`,
                    addRecipeInformation: true,
                    number: 25,
                    offset: this.state.page * 25,
                    limitLicense: false
                } 
            }
            axios.get(url, config)
            .then((response) => {
                const results = response.data.results.map((elem) => ({
                    id: elem.id,
                    title: elem.title,
                    image: elem.image,
                    description: elem.summary,
                    nutrition: {
                        calories: elem.nutrition.nutrients[0].amount,
                        protein: elem.nutrition.nutrients[1].amount,
                        fat: elem.nutrition.nutrients[2].amount,
                        carbs: elem.nutrition.nutrients[3].amount
                    }
                }))

                this.setState(() => ({
                    data: results
                }))
                
            })
            .catch((error) => console.log(error))
        

            this.setState(() => ({
                searchWindowVisible: true
            }))
        }, 100)
    }

    resetPageToZero() {
        this.setState(() => ({
            page: 0
        }))
    }

    render() { 
        let form = 
        <div className={"food-form"}>
            <button className={"close-button"} onClick={this.makeFormHide}>X</button>
            <form  className={"inner-food-form"} onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <span>
                    <label>Input search term: </label>
                    <input name="query" type="text" required></input>
                </span>
                <label>Dietary requirements? (tick all that apply)</label>
                <span>
                    <input name="vegetarian" type="checkbox" value="vegetarian"></input>
                    <label>Vegetarian</label>
                </span>
                <span>
                    <input name="vegan" type="checkbox" value="vegan"></input>
                    <label>Vegan</label>
                </span>
                <span>
                    <input name="glutenFree" type="checkbox" value="gluten free"></input>
                    <label>Gluten free</label>
                </span>
                <span>
                    <label>Minimum Calories per serving: </label>
                    <input name="minCal" type="number"></input>
                </span>
                <span>
                    <label>Maximum Calories per serving: </label>
                    <input name="maxCal" type="number"></input>
                </span>
                <span>
                    <label>Minimum Fat per serving: </label>
                    <input name="minFat" type="number"></input>
                </span>
                <span>
                    <label>Maximum Fat per serving: </label>
                    <input name="maxFat" type="number"></input>
                </span>
                <span>
                    <label>Minimum Carbs per serving: </label>
                    <input name="minCarb" type="number"></input>
                </span>
                <span>
                    <label>Maximum Carbs per serving: </label>
                    <input name="maxCarb" type="number"></input>
                </span>
                <span>
                    <label>Minimum protein per serving: </label>
                    <input name="minProt" type="number"></input>
                </span>
                <span>
                    <label>Maximum protein per serving: </label>
                    <input name="maxProt" type="number"></input>
                </span>
                <input className={"form-submit"} type="submit" value="Search"></input>
            </form>
        </div>
        return (
            <div>
                    <div className="meal-layout scrollable-div">
                        {
                            this.state.cardData.map((elem) => 
                                <MealCard
                                    className={"left-shuffle"} 
                                    key={elem.id} 
                                    title={elem.title} 
                                    image={elem.image}
                                    calories={elem.calories}
                                    fat={elem.fat}
                                    protein={elem.protein}
                                    carbs={elem.carbs}
                                />)
                        }
                        <button className={"add-meal-button"} onClick={this.makeFormSee}>Add Meal</button>
                    </div>
                    <div className={"divider-container scrollable-div"}>
                        <div>
                            <GraphContainer total={this.state.total}/>
                        </div>
                        <div className="recipe-container recipe-div">
                            <IngredientList dataList={this.state.cardData}/>
                        </div>
                    </div>
                    {this.state.formVisible && form}
                {
                    this.state.searchWindowVisible 
                    && 
                    <SearchWindow 
                        getFoodId={this.setFoodId} 
                        data={this.state.data} 
                        page={this.state.page} 
                        totalResults={this.state.totalResults}
                        hideSearchWindow={this.hideSearchWindow}
                        handleIncrement={this.incrementPage}
                        handleDecrement={this.decrementPage}
                        pageReset={this.resetPageToZero}
                    />
                }
                
            </div>
        );
    }
}
 
export default AppContainer;