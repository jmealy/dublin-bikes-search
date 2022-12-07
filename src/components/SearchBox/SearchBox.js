import React from 'react';
import Select from 'react-select';

const SearchBox = (props) => {
  const { options, onSubmit } = props;

  return (
    <div className="searchBox">
      <Select
        isClearable={true}
        name="address"
        options={options}
        onChange={onSubmit}
      />
    </div>
  );
}

export default SearchBox;
