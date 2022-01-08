import styled from "styled-components";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const FilterField = styled.span`
  width: 100%;
  margin-bottom: 15px;
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 20px;
  border: 0;
  outline: none;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(0, 0, 0, 0.12),
    inset 0px 4px 4px rgba(0, 0, 0, 0.15), inset 1px 4px 6px rgba(0, 0, 0, 0.16);
`;
