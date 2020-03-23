/* eslint-disable react/prop-types */
import React from 'react';
import './button.css';

export default function Button({ children, disable }) {
  return (

    <button disabled={disable} className="styled-button" type="submit">
      {children}
    </button>
  );
}
