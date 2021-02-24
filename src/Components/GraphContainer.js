import React, { Component } from 'react';

class GraphContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div style={theOne}>
                {(this.props.total.calories !== 0) && <img alt="Doughnut chart with macronutrient breakdown" src={`https://quickchart.io/charts?backgroundColor=transparent&w=350&h=300&devicePixelRatio=1.0&f=png&c={type:"doughnut",data:{labels:["Carbs (g)","Fat (g)","Protein (g)"],datasets:[{data:[${Math.round(this.props.total.carbs * 100) / 100},${Math.round(this.props.total.fat * 100) / 100},${Math.round(this.props.total.protein * 100) / 100}],backgroundColor:["rgb(255,188,35)","rgb(240,70,70)","rgb(30,213,255)"]}]},options:{plugins:{datalabels:{display:true,background:"none",font:{color:"rgb(240,240,240)",weight:"bold"}},doughnutlabel:{labels:[{text:${Math.round(this.props.total.calories * 100) / 100},font:{size:"20",weight:"bold"}},{text:"Calories"}]}}}}`}></img>}
            </div>
        );
    }
}

const theOne = {
    marginBottom: "1rem",
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    borderRadius: "0.5rem",
    boxShadow: "2px 2px 30px grey"
}
 
export default GraphContainer;