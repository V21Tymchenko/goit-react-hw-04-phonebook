import React from 'react';
import PropTypes from 'prop-types';
import { FindContact, FindContactsInput } from './Filter.styled.jsx';

const Filter = ({ value, onChange }) => {
  return (
    <FindContact>
      Find contacts by name
      <FindContactsInput
        type="text"
        value={value}
        onChange={onChange}
      ></FindContactsInput>
    </FindContact>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
