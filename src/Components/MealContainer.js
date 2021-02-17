// import React, { Component } from 'react';
// import axios from "axios";
// import MealCard from "./MealCard";
// import SearchWindow from "./SearchWindow";

// class MealContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchWindowVisible: false,
//             data: [],
//             cardData: [],
//             page: 0
//         }
//     }

    
//     render() {
//         return ( 
//             <div style={{position: "absolute", left: "500px", top: "500px"}}>
//                 {this.state.searchWindowVisible && <SearchWindow data={this.state.data} page={this.state.page} hideSearchWindow={this.hideSearchWindow}/>}
//             </div>
//          );
//     }
// }



// export default MealContainer;

// Add seperate component to pass props to, which will create new elements on the regular
// in hindsight the form should have been a component, but its functional there and if it aint broke don't fix it