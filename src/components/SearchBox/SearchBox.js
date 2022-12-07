import React, { useState } from 'react';
import Select from 'react-select';

const SearchBox = (props) => {
  const { options, onSubmit, selectedOption } = props;
  // const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="searchBox">
      <Select
        defaultValue={options[0]}
        isClearable={true}
        name="color"
        options={options}
        onChange={onSubmit}
        // clearValue= {() => console.log('clearing value')}
      />
    </div>
  );
}

export default SearchBox;

// import React, { useState } from 'react';

// import Select from 'react-select';
// const colourOptions = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

// export default () => {
//   const [isClearable, setIsClearable] = useState(true);

//   return (
//     <>
//       <Select
//         className="basic-single"
//         classNamePrefix="select"
//         defaultValue={colourOptions[0]}
//         isClearable={true}
//         name="color"
//         options={colourOptions}
//       />

//       <div
//         style={{
//           color: 'hsl(0, 0%, 40%)',
//           display: 'inline-block',
//           fontSize: 12,
//           fontStyle: 'italic',
//           marginTop: '1em',
//         }}
//       >
//       </div>
//     </>
//   );
// };