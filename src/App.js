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
    this.selectOne = this.selectOne.bind(this);
    this.selectThree = this.selectThree.bind(this);
    this.selectWeek = this.selectWeek.bind(this);
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

  selectOne() {
    this.setState(() => ({
      numCards: 1,
      visible: false
    }))
  }

  selectThree() {
    this.setState(() => ({
      numCards: 3,
      visible: false
    }))
  }

  selectWeek() {
    this.setState(() => ({
      numCards: 21,
      visible: false
    }))
  }

  render() {
    return(
      <div>
        <img style={{zIndex: "-1", filter: "blur(5px)", position: "fixed", top: "0", left: "0", height: "100vh", width: "100vw"}} alt="" src={background} />
        <Title
          numCards={this.state.numCards}
          visible={this.state.visible} 
          toggleFeedbackVisible={this.toggleFeedbackVisible} 
          toggleVisible={this.toggleVisible} 
          toggleAboutVisible={this.toggleAboutVisible}
        />
        {
          this.state.visible 
          && 
          <Sidebar 
            selectOne={this.selectOne} 
            selectThree={this.selectThree} 
            selectWeek={this.selectWeek}
          />
        } 
        {
          this.state.aboutVisible 
          && 
          <About 
            toggleAboutVisible={this.toggleAboutVisible}
          /> 
        }
        {
          this.state.feedbackVisible 
          && 
          <Feedback 
            toggleFeedbackVisible={this.toggleFeedbackVisible}
          />
        }
        <AppContainer cardsToShow={this.state.numCards} />
      </div>
    );
}}
export default App;

