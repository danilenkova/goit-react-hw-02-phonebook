import React from "react";
import PropTypes from "prop-types";
import {
  StyledSection,
  StyledHeaderSection,
  SectionTitle,
  HeaderTitle,
} from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

const HeaderSection = ({ children }) => {
  return (
    <StyledHeaderSection>
      <HeaderTitle>
        <span>Phone</span>Book
      </HeaderTitle>
      {children}
    </StyledHeaderSection>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

HeaderSection.propTypes = {
  children: PropTypes.node,
};

export { Section, HeaderSection };
