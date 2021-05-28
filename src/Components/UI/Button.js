import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">{props.text}</button>
  )
}

export default Button;