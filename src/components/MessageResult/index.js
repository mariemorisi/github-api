import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import './style.css';

const MessageResult = ({ message }) => (
  <Message
    content={message}
  />
);

MessageResult.propTypes = {
  message: PropTypes.string.isRequired,
};
export default MessageResult;
