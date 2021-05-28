import React from 'react';
import Button from '../UI/Button';

const TopBar = () => {
  const signupClickHandler = () => {
    console.log("This is a click");
  }
  return (
    <div className="h-20 block border-2 w-full">
      <img src="shield_logo.png" alt="Black shield logo" className="h-full w-auto cursor-pointer float-left p-2"></img>
      <div className="p-4 h-full flex float-right justify-evenly w-60">
        <Button text="Sign Up" onClick={signupClickHandler} />
        <Button text="Log In" />
      </div>

    </div>
  )
}

export default TopBar;