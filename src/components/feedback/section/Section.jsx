import React from 'react';
import { SectionCont, SectionTitle } from '../Styles/SectionStyled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionCont>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
