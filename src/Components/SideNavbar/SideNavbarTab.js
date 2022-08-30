//the individual clickable links to each 'tab'
import React from 'react';

const SideNavbarTab = props => {

  return(
    <div className="cursor-pointer p-4 w-full h-full border-2">
      <img src={props.source} alt={props.alt} className="" />
      <h2 className="text-xs mt-2">{props.name}</h2>
    </div>
  )
}

export default SideNavbarTab;