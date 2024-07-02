import React from 'react';
import LogoDiv from './logodiv';

const HoverDiv = () => {
  return (
    <div className="relative w-28 h-28  flex items-center justify-center group">
      <p>Profiles</p>
      <button  className="absolute bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform button-1"><LogoDiv redirect="https://leetcode.com/nothuman9504/" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KJ34dO3Vp7rp1UHEo4eO8VAFNoHKLI9mrw&s"></LogoDiv></button>
      <button className="absolute bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform button-2"> <LogoDiv redirect="https://www.linkedin.com/in/jaimin-khunt-a77aa8269/" link="https://i.ibb.co/bXbFycw/122.png"></LogoDiv> </button>
      <button  className="absolute bg-blue-500 text-white  opacity-0 group-hover:opacity-100 transition-all duration-500 transform button-3"> <LogoDiv redirect="https://github.com/notHuman9504" link="https://i.ibb.co/bXgmHmX/121112.png"></LogoDiv></button>
      <button className="absolute bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform button-4"> <LogoDiv redirect="https://codeforces.com/profile/notHuman9504" link="https://i.ibb.co/fX2yZ2J/cf.png"></LogoDiv></button>
      <button  className="absolute bg-blue-500 text-white  opacity-0 group-hover:opacity-100 transition-all duration-500 transform button-5"> <LogoDiv redirect="https://www.codechef.com/users/nothuman9504" link="https://i.ibb.co/syv0Ywn/cc.png"></LogoDiv> </button>
      <style jsx>{`

        .group:hover {
          height:200px
        }
        .group:hover .button-1 {
          transform: translate(-55px, 40px);
        }
        .group:hover .button-2 {
          transform: translate(-35px, 75px);
        }
        .group:hover .button-3 {
          transform: translate(0, 80px);
        }
        .group:hover .button-4 {
          transform: translate(35px, 75px);
        }
        .group:hover .button-5 {
          transform: translate(55px, 40px);
        }
      `}</style>
    </div>
  );
};

export default HoverDiv;
