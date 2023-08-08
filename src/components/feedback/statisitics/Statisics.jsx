import React from 'react';
import PropTypes from 'prop-types';
import { Paragraft, Ul, Li } from '../Styles/StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total <= 0 ? (
        <Paragraft>There is no feedback</Paragraft>
      ) : (
        <Ul>
          <Li>Good: {good}</Li>
          <Li>Neutral: {neutral}</Li>
          <Li>Bad: {bad}</Li>
          <Li>Total: {total}</Li>
          <Li>Positive feedback: {positivePercentage}%</Li>
        </Ul>
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
