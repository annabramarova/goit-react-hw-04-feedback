import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonsList} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ButtonsList>
        {options.map((option) => {
            const text = option.slice(0, 1).toUpperCase() + option.slice(1);
            return <li key={option}>
                <Button type='button' onClick={() => onLeaveFeedback(option)}>
                    {text}
                </Button>
            </li>
        })}
    </ButtonsList>
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;