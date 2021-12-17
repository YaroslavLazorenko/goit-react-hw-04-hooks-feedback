import { Component } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option.toLowerCase()]: prevState[option.toLowerCase()] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section>
          <h1>Welcome to feedback statistics application!</h1>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
