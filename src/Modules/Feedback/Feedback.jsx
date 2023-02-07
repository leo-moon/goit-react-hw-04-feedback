import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import FeedbackBlock from './FeedbackBlock/FeedbackBlock';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbacks;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = ((feedbacks.good / total) * 100).toFixed(0);
    return Number(value);
  };

  const changeState = feedback => {
    setFeedbacks(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  };



    const { good, neutral, bad } = feedbacks;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    const element = !total ? (
      <p>No feedback given</p>
    ) : (
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );

  return (
    <>
      <FeedbackBlock title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={changeState}
        />
      </FeedbackBlock>

      <FeedbackBlock title="Statistic">{element}</FeedbackBlock>
    </>
  );

};

export default Feedback;

/*

ірше 

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = feedback => {
    this.setState(stateValues => {
      return { [feedback]: stateValues[feedback] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const value = ((this.state.good / total) * 100).toFixed(0);
    return Number(value);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const element = !total ? (
      <p>No feedback given</p>
    ) : (
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );

    return (
      <>
        <FeedbackBlock title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.changeState}
          />
        </FeedbackBlock>

        <FeedbackBlock title="Statistic">{element}</FeedbackBlock>
      </>
    );
  }
}*/
