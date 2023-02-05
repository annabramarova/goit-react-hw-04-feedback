import PropTypes from 'prop-types';
import React from 'react';
import {Container, Title, Text} from './Section.styled'

const Section = ({ title, children }) => (
    <Container>
        <Title>
            <Text>{title}</Text>
        </Title>
        {children}
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;