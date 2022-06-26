import React from "react";

import lodash from 'lodash';

export default function Search({onHandleSearchInput}) {
  return (
    <div>
      <h1>Country info.</h1>
      <h3>Enter country name:</h3>
      <input
        type="text"
        name="text"
        placeholder="Enter country name to search..."
        onInput={lodash.debounce(onHandleSearchInput, 800)}
      />
    </div>
  );
}
