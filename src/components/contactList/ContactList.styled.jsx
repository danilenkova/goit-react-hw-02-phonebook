import styled from "styled-components";

export const Contacts = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 5px;
  border-bottom: 1px solid #ffffff;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const ContactName = styled.span`
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
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
