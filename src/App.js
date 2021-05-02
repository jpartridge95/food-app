import React, { Component } from 'react';
import './App.css';
import './index.css';
import background from "./Images/background.jpg";
import Title from "./Components/Title"
import About from "./Components/About"
import Feedback from "./Components/Feedback"
import AppContainer from "./Components/AppContainer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutVisible: false,
      animateInAbout: ""
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
        <img className={"background-image"}  alt="" src={background} />
        <Title
          numCards={this.state.numCards}
          visible={this.state.visible} 
          toggleFeedbackVisible={this.toggleFeedbackVisible} 
          toggleVisible={this.toggleVisible} 
          toggleAboutVisible={this.toggleAboutVisible}
        />
        {
          this.state.aboutVisible 
          && 
          <About 
            toggleAboutVisible={this.toggleAboutVisible}
            animateIn={this.state.animateInAbout}
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

