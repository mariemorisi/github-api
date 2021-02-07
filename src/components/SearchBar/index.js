import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

import './style.css';

const SearchBar = ({
  inputValue, onInputChange, onFormSubmit, loading,
}) => (
  <form onSubmit={(evt) => {
    evt.preventDefault();
    onFormSubmit();
  }}
  >
    <Input
      fluid
      loading={loading}
      icon="search"
      iconPosition="left"
      focus
      placeholder="Search..."
      className="search"
      value={inputValue}
      onChange={(evt) => {
        const newValue = evt.target.value;
        onInputChange(newValue);
      }}
    />
  </form>
);
SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
