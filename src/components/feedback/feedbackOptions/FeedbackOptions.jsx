import React from 'react';
import PropTypes from 'prop-types';
import { FeddbackCont, FeddbackButton } from '../Styles/FeedbackOptionsStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeddbackCont>
      {options.map(option => (
        <FeddbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeddbackButton>
      ))}
    </FeddbackCont>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
