import React, { useState } from 'react';
import Select from 'react-select';

const SearchBox = (props) => {
  const { options, onSubmit } = props;

  return (
    <div className="searchBox">
      <Select
        defaultValue={options[0]}
        isClearable={true}
        name="color"
        options={options}
        onChange={onSubmit}
      />
    </div>
  );
}

export default SearchBox;
