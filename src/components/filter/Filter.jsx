import React from "react";
import { FilterLabel, FilterField, FilterInput } from "./Filter.styled";

const Filter = ({ text, onChange }) => {
  return (
    <FilterLabel>
      <FilterField>Find contacts by name</FilterField>
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        value={text}
        placeholder="Enter name"
        autoComplete="off"
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
