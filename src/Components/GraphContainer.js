import axios from 'axios';
import React, { Component } from 'react';

class GraphContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                {(this.props.total.calories !== 0) && <img src={`https://quickchart.io/charts?backgroundColor=transparent&w=500&h=300&devicePixelRatio=1.0&f=png&c={type:"doughnut",data:{labels:["Carbs","Fat","Protein"],datasets:[{data:[${Math.round(this.props.total.carbs * 100) / 100},${Math.round(this.props.total.fat * 100) / 100},${Math.round(this.props.total.protein * 100) / 100}],backgroundColor:["rgb(255,188,35)","rgb(240,50,50)","rgb(30,213,255)"]}]},options:{plugins:{datalabels:{display:true,background:"none",font:{color:"rgb(240,240,240)",weight:"bold"}},doughnutlabel:{labels:[{text:${Math.round(this.props.total.calories * 100) / 100},font:{size:"20",weight:"bold"}},{text:"Calories"}]}}}}`}></img>}
            </div>
        );
    }
}
 
export default GraphContainer;