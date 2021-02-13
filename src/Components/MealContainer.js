import React, { Component } from 'react';
import axios from "axios";
import MealCard from "./MealCard";

class MealContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            results: [{
                id: "",
                title: "",
                image: "",
                description: "",
                ingredients: {
                },
                nutrition: {
                }
            }],
            page: 0
        }
        
        this.makeFormSee = this.makeFormSee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.makeFormHide = this.makeFormHide.bind(this);
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
                apiKey: "ac6829b0e2fc494983e3f23a6a0fcb8c",
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
                offset: this.state.page * 25
            } 
        }
        
        axios.get(url, config)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

        this.setState(() => ({
            vegetarian: "",
            vegan: "",
            glutenFree: ""
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
                <button onClick={this.makeFormSee}>Add meal</button>
                <p>{this.state.vegetarian}</p>
                {this.state.formVisible && form}
                {this.state.results.map((elem) => <MealCard />)}
            </div>
         );
    }
}
 
export default MealContainer;

// Add seperate component to pass props to, which will create new elements on the regular