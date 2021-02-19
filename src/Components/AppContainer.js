import React, { Component } from 'react';
import GraphContainer from "./GraphContainer"
// import MealContainer from "./MealContainer"
import axios from "axios"
import SearchWindow from './SearchWindow';
import MealCard from './MealCard';
import IngredientList from "./IngredientList";

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
                calories: state.total.calories += id.calories,
                fat: state.total.fat += id.fat,
                carbs: state.total.carbs += id.carbs,
                protein: state.total.protein += id.protein
            },
            cardData: [...state.cardData, id],
            searchWindowVisible: false,

        }))
        setTimeout(() => console.log(this.state.cardData), 100)
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
        <div style={bgCard}>
            <button onClick={this.makeFormHide}>X</button>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <label>Input search term</label>
                <input name="query" type="text" required></input>
                <label>Dietary requirements? (tick all that apply)</label>
                <input name="vegetarian" type="checkbox" value="vegetarian"></input>
                <label>Vegetarian</label>
                <input name="vegan" type="checkbox" value="vegan"></input>
                <label>Vegan</label>
                <input name="glutenFree" type="checkbox" value="gluten free"></input>
                <label>Gluten free</label>
                <label>Minimum Calories per serving</label>
                <input name="minCal" type="number"></input>
                <label>Maximum Calories per serving</label>
                <input name="maxCal" type="number"></input>
                <label>Minimum Fat per serving</label>
                <input name="minFat" type="number"></input>
                <label>Maximum Fat per serving</label>
                <input name="maxFat" type="number"></input>
                <label>Minimum Carbs per serving</label>
                <input name="minCarb" type="number"></input>
                <label>Maximum Carbs per serving</label>
                <input name="maxCarb" type="number"></input>
                <label>Minimum protein per serving</label>
                <input name="minProt" type="number"></input>
                <label>Maximum protein per serving</label>
                <input name="maxProt" type="number"></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
        return (
            <div>
                {/* Mid refactor here my plan is infinite monkeys */}
                <div style={{position: "absolute", zIndex: "3", top: "200px", left: "200px"}}>
                    <button onClick={this.makeFormSee}>I'm a button</button>
                    <IngredientList dataList={this.state.cardData}/>
                    {
                        this.state.cardData.map((elem) => 
                            <MealCard 
                                key={elem.id} 
                                title={elem.title} 
                                image={elem.image}
                                calories={elem.calories}
                                fat={elem.fat}
                                protein={elem.protein}
                                carbs={elem.carbs}
                            />)
                    }
                    {this.state.formVisible && form}
                    
                </div>
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
                <GraphContainer 
                    carbs={this.state.total.carbs} 
                    fat={this.state.total.fat} 
                    protein={this.state.total.protein} 
                    calories={this.state.total.calories}/>
            </div>
        );
    }
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
 
export default AppContainer;