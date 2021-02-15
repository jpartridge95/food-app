import React, { Component } from 'react';
import axios from "axios";
import MealCard from "./MealCard";
import SearchWindow from "./SearchWindow";

class MealContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            searchWindowVisible: false,
            data: [],
            page: 0
        }
        
        this.makeFormSee = this.makeFormSee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.makeFormHide = this.makeFormHide.bind(this);
        this.hideSearchWindow = this.hideSearchWindow.bind(this);
    }

    hideSearchWindow() {
        this.setState(() => ({
            searchWindowVisible: false
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
            formVisible: false
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

            this.props.carbs = results.nutrition.carbs;
            this.props.protein = results.nutrition.protein;
            this.props.fat = results.nutrition.fat;
            this.props.calories = results.nutrition.calories;

            this.setState(() => ({
                data: results
            }))
            
        })
        .catch((error) => alert(error))

        this.setState(() => ({
            vegetarian: "",
            vegan: "",
            glutenFree: "",
            searchWindowVisible: true
        }))
    }

    handleChange(e) {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        let form = 
        <div>
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
            <div style={{position: "absolute", left: "500px", top: "500px"}}>
                {
                    this.props.numCards === 1 
                    &&
                    <MealCard makeFormSee={this.makeFormSee}/>
                }

                {
                    this.props.numCards === 3
                    &&
                    <div>
                        <MealCard makeFormSee={this.makeFormSee}/>
                        <MealCard makeFormSee={this.makeFormSee}/>
                        <MealCard makeFormSee={this.makeFormSee}/>
                    </div>
                }
                {this.state.formVisible && form}
                {this.state.searchWindowVisible && <SearchWindow data={this.state.data} page={this.state.page} hideSearchWindow={this.hideSearchWindow}/>}
            </div>
         );
    }
}



export default MealContainer;

// Add seperate component to pass props to, which will create new elements on the regular
// in hindsight the form should have been a component, but its functional there and if it aint broke don't fix it