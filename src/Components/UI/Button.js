import React from 'react';

const Button = (props) => {
  const styles = `bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded w-15 ${props.extraStyles}`;

  return (
    <button className={styles} onClick={props.onClick}>{props.text}</button>
  )
}

export default Button;