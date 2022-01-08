import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 0;
  padding-top: 40px;
  @media screen and (min-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 340px;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const StyledHeaderSection = styled.section`
  margin: 0;
  padding-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
  span {
    color: #0093e9;
  }
`;
