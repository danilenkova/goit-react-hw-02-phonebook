import React from "react";
import PropTypes from "prop-types";
import StyledHeader from "./Header.styled";

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
