import React, { useState } from 'react';
import Section from './section/Section';
import Statistics from './statisitics/Statisics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import { FeedbackCont } from './Styles/FeedbackStyled';

export default function Feedback() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCounts;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackCounts;
    const totalFeedbacks = countTotalFeedback();
    return totalFeedbacks === 0 ? 0 : Math.round((good / totalFeedbacks) * 100);
  };

  const feedbackOptions = Object.keys(feedbackCounts);
  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <FeedbackCont>
      <Section title="please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="statistics">
        <Statistics
          good={feedbackCounts.good}
          neutral={feedbackCounts.neutral}
          bad={feedbackCounts.bad}
          total={totalFeedbacks}
          positivePercentage={positivePercentage}
        />
      </Section>
    </FeedbackCont>
  );
}
