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
                        <h5 style={innerFont}>Single meal</h5>
                        
                    </div>

                    <div>
                        <h5 style={innerFont}>1 Day's Food<br />(3 meals)</h5>
                        
                    </div>

                    <div>
                        <h5 style={innerFont}>1 Week's food <br />(21 meals)</h5>
                        
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
    zIndex: "-2"
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
    marginBottom: "15vh"
}

export default Sidebar;
