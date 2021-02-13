import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import background from "./Images/background.jpg";
import Title from "./Components/Title"
import Sidebar from "./Components/Sidebar"
import About from "./Components/About"
import Feedback from "./Components/Feedback"
import AppContainer from "./Components/AppContainer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      aboutVisible: false
    }

    this.toggleVisible = this.toggleVisible.bind(this);
    this.toggleAboutVisible = this.toggleAboutVisible.bind(this);
    this.toggleFeedbackVisible = this.toggleFeedbackVisible.bind(this);
  }

  toggleVisible() {
    this.setState((state) => ({
      visible: !state.visible
    }))
  }

  toggleAboutVisible() {
    if (this.state.feedbackVisible === true) {
      this.setState(() => ({
        feedbackVisible: false
      }))
    }
    this.setState((state) => ({
      aboutVisible: !state.aboutVisible
    }))
  }

  toggleFeedbackVisible() {
    if (this.state.aboutVisible === true) {
      this.setState(() => ({
        aboutVisible: false
      }))
    }
    this.setState((state) => ({
      feedbackVisible: !state.feedbackVisible
    }))
  }

  render() {
    return(
      <div>
      <img style={{zIndex: "-1", filter: "blur(5px)", position: "fixed", top: "0", left: "0", height: "100vh", width: "100vw"}} alt="" src={background} />
      <Title visible={this.state.visible} toggleFeedbackVisible={this.toggleFeedbackVisible} toggleVisible={this.toggleVisible} toggleAboutVisible={this.toggleAboutVisible}/>
      {this.state.visible && <Sidebar />} 
      {this.state.aboutVisible && <About toggleAboutVisible={this.toggleAboutVisible}/> }
      {this.state.feedbackVisible && <Feedback toggleFeedbackVisible={this.toggleFeedbackVisible}/>}
      <AppContainer />
      </div>
    );
}}
export default App;

