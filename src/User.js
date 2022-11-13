import React from 'react'

export const User = (props) => {
    return (
      <div>
        <h2>
          {props.name} : {props.age}
        </h2>
      </div>
    );
  };
