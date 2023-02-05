import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleClick = optionId => {
    const key = Object.keys(this.state)[optionId];
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.floor(100 * this.state.good / total): 0;
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const statsKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();


    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={statsKeys}
            onLeaveFeedback={this.handleClick} />
          </Section>
        <Section title="Statistics">
          {total>0 ? (
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
              />)
            :(<Notification message="There is no feedback" />)}
        </Section>
      </>
    );
  };
}

