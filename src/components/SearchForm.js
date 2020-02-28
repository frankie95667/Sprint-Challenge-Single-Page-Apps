import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const SearchForm = ({ updateSearch, handleChange, status }) => {
  useEffect(() => {
    if (status) {
      updateSearch(status);
    }
  }, [status]);
  return (
    <section className="search-form">
      <SearchContainer>
        <Form>
          <label htmlFor="search"></label>
          <Field
            as={SearchBar}
            id="search"
            name="search"
            placeholder="Search..."
          />
          <SearchButton type="submit">Go</SearchButton>
        </Form>
      </SearchContainer>
    </section>
  );
};

const SearchContainer = styled.div`
  margin: 20px 0;
  width: 100%;

  form {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const SearchBar = styled.input`
  border: 1px solid lightgray;
  border-radius: 0.4rem 0 0 0.4rem;
  padding: 0.5rem 1rem;
  width: 20%;
`;

const SearchButton = styled.button`
  padding: 0.48rem 1rem;
  border-radius: 0 0.4rem 0.4rem 0;
  border: 1px solid lightgray;
  border-left: none;
  margin-right: 25px;
`;

export default withFormik({
  mapPropsToValues() {
    return {
      search: ""
    };
  },
  validationSchema: null,
  handleSubmit(values, { setStatus }) {
    setStatus(values.search);
  }
})(SearchForm);
