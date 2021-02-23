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
        <div style={bgCard}>
            <button style={closeButtonStyle} onClick={this.makeFormHide}>X</button>
            <form style={formStyle} onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <span style={formSpanStyle}>
                    <label>Input search term: </label>
                    <input name="query" type="text" required></input>
                </span>
                <label style={formSpanStyle}>Dietary requirements? (tick all that apply)</label>
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
                <span style={formSpanStyle}>
                    <label>Minimum Calories per serving: </label>
                    <input name="minCal" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Maximum Calories per serving: </label>
                    <input name="maxCal" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Minimum Fat per serving: </label>
                    <input name="minFat" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Maximum Fat per serving: </label>
                    <input name="maxFat" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Minimum Carbs per serving: </label>
                    <input name="minCarb" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Maximum Carbs per serving: </label>
                    <input name="maxCarb" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Minimum protein per serving: </label>
                    <input name="minProt" type="number"></input>
                </span>
                <span style={formSpanStyle}>
                    <label>Maximum protein per serving: </label>
                    <input name="maxProt" type="number"></input>
                </span>
                <input style={formSpanStyle} type="submit" value="Search"></input>
            </form>
        </div>
        return (
            <div>
                    <div style={mealPlacement}>
                        {
                            this.state.cardData.map((elem) => 
                                <MealCard
                                    style={mealCardPlacement} 
                                    key={elem.id} 
                                    title={elem.title} 
                                    image={elem.image}
                                    calories={elem.calories}
                                    fat={elem.fat}
                                    protein={elem.protein}
                                    carbs={elem.carbs}
                                />)
                        }
                        <button style={addMealStyle} onClick={this.makeFormSee}>Add Meal</button>
                    </div>
                    <div style={infoHolderStyle}>
                        <div>
                            <GraphContainer total={this.state.total}/>
                        </div>
                        <div style={recipeBox}>
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

const bgCard = {
    position: "fixed",
    display: "flex",
    height: "82vh",
    width: "50vw",
    zIndex: "3",
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    margin: "auto",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    borderRadius: "1rem",
    boxShadow: "2px 2px 30px grey",
    overflow: "scroll"
}
const mealPlacement = {
    position: "fixed",
    width: "95vw",
    height: "38vh",
    overflow: "scroll",
    top: "110px",
    display: "inline-flex",
    gap: "1rem",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto"
}

const mealCardPlacement = {
    marginLeft: "0.3rem",
}

const addMealStyle = {
    border: "none",
    background: "rgba(250, 250, 250, 0.4)",
    borderRadius: "0.8rem",
    fontSize: "2rem",
    boxShadow: "2px 2px 30px grey",
    height: "30vh",
    top: "0",
    bottom: "0",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "0.3rem"
}

const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "78vw",
    alignItems: "center"
    
}

const closeButtonStyle = {
    border: "none",
    background: "none",
    height: "2rem",
    fontSize: "1.5rem"
}

const formSpanStyle = {
    marginTop: "1.1rem"
}

const infoHolderStyle = {
    height: "42vh",
    width: "95vw",
    display: "flex",
    position: "fixed",
    overflow: "scroll",
    top: "55vh",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
    justifyContent: "space-around"
}

const recipeBox = {
    height: "39vh",
    width: "300px",
    flex: "0 1 auto",
    overflow: "scroll"
}
 
export default AppContainer;