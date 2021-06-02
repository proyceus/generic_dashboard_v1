import React from 'react';
import SideNavbarTab from './SideNavbarTab';


const SideNavBar = () => {
  const navigationTabs = [
    {
      name: 'Home',
      img: 'home.png',
      alt: 'Icon of house',
      id: 1
    },
    {
      name: 'Weather',
      img: "weather.png",
      alt: 'Cloud icon',
      id: 2
    },
    {
      name: 'To Do',
      img: 'clipboard.png',
      alt: 'Checklist icon',
      id: 3
    }
  ];

  return(
    <div className="flex flex-col items-start w-20 h-full bg-gray-100">
      {navigationTabs.map((item) => {
        return <SideNavbarTab source={item.img} name={item.name} key={item.id} alt={item.alt} />
      })}
    </div>
  )
}

export default SideNavBar;