import React from "react";

const Button = ({ color, text }) => {
  return (
    <div>
      <button
        style={{ background: color }}
        className='btn'>
        {text}
      </button>
    </div>
  );
};

export default Button;
