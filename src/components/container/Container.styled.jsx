import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 15px;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    max-width: 920px;
  }
`;
