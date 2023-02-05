import {  useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';


export const App =() => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });


  const handleClick = name => {
    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };
  
    const { good, neutral, bad } = feedback;
    const options = Object.keys(feedback);
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round(( good / total)*100): 0;


    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick} />
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

