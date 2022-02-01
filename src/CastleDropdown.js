import React from 'react';
import RenderDropdownItem from './RenderDropdownItem';

export default function CastleDropdown(props) {
  return (
    <div>
      Select a Castle
      {/* this component should have a prop called setCastle, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setCastle function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select onChange={(e) => {props.setCastleId(e.target.value); }}>
        {
          props.castleArr.map((item, i) => 
            <RenderDropdownItem key={`${item}${i}`} item={item} i={i} />
          )
        }
      </select>
    </div>
  );
}
