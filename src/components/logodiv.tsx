import React from 'react';

interface LogoDivProps {
  link: string;
  redirect: string;
}

const LogoDiv: React.FC<LogoDivProps> = ({ link, redirect }) => {
  return (
    <div
      style={{ cursor: "none", boxShadow: "2px 2px 0 -1px white" }}
      className="w-8 h-8 glow border border-white"
      onClick={() => {
        window.location.href = redirect;
      }}
    >
      <img style={{ cursor: "none" }} className="rounded-sm" src={link} alt="" />
      <style jsx>{`
        .glow {
          background-color: black;
          transition: box-shadow 0.3s ease-in-out;
        }
        .glow:hover {
          box-shadow: 0 0 15px 1px aqua;
        }
      `}</style>
    </div>
  );
};

export default LogoDiv;
