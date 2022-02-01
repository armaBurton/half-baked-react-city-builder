import React from 'react';
import RenderDropdownItem from './RenderDropdownItem';

export default function SkylineDropdown(props) {

  return (
    <div>
      Select a Skyline
      {/* this component should have a prop called setSkyline, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setSkyline function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select onChange={(e) => {props.setSkylineId(e.target.value); }}>
        {
          props.skylineArr.map((item, i) =>
            <RenderDropdownItem key={`${item}${i}`} item={item} i={i} />)
        }
      </select>
    </div>
  );
}
