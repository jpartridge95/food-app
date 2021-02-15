import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <nav style={fullscreenNav}>
                <div>
                    <div>
                        <button style={crossStyle}></button>
                    </div>

                    <div>
                        <button style={innerFont} onClick={this.props.selectOne}>Single meal</button>
                        
                    </div>

                    <div>
                        <button style={innerFont} onClick={this.props.selectThree}>1 Day's Food<br />(3 meals)</button>
                        
                    </div>

                    <div>
                        <button style={innerFont} onClick={this.props.selectWeek}>1 Week's food <br />(21 meals)</button>
                        
                    </div>
                </div>
            </nav>
            
        )

    }
}

const fullscreenNav = {
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    backgroundColor: "rgba(0, 204, 0, 0.7)",
}

const crossStyle = {
    marginTop: "10rem",
    marginBottom: "5vh",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    color: "rgba(245, 245, 245, 0.95)"
}

const innerFont = {
    fontSize: "1.5rem",
    color: "rgba(245, 245, 245, 0.95)",
    marginTop: "auto",
    marginBottom: "15vh",
    background: "none",
    border: "none"
}

export default Sidebar;
