import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const FormField = styled.span`
  width: 100%;
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
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

export const FormButton = styled.button`
  width: 110px;
  height: 40px;
  padding: 4px;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    color: #e0c3fc;
    text-shadow: -1px -2px 1px #000;
  }
`;
