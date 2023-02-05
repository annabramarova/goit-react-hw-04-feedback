import React from 'react';
import PropTypes from 'prop-types';
import {NotificationP} from './Notification.styled'

const Notification = ({ message }) => <NotificationP>{message}</NotificationP>

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;