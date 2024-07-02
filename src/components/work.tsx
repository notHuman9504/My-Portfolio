import React, { useRef, useState } from 'react';
import ProgressBar from './VerticalProgressBar';

interface ProjectDetails {
  gitLink: string;
  image1: string;
  image2: string;
  content: string[];
}

interface ProjectProps {
  Details: ProjectDetails;
}

const Project: React.FC<ProjectProps> = ({ Details }) => {
  const [src, setSrc] = useState(Details.image1);

  return (
    <>
      <div className="w-full relative h-[350px] z-[100000] RightToLeft">
        <div
          onClick={() => {
            window.location.href = Details.gitLink;
          }}
          className="flex justify-center items-center absolute w-8 h-8 hover:w-full hover:h-full bg-[black] hover:opacity-60 duration-300 rounded-md bg-black border-2"
        >
          <div className="mt-1 w-8 h-8">
            <img className="rounded-lg" src="https://i.ibb.co/bXgmHmX/121112.png" alt="" />
          </div>
        </div>
        <div className="p-8">
          <img
            onMouseEnter={() => {
              setSrc(Details.image2);
            }}
            onMouseLeave={() => {
              setSrc(Details.image1);
            }}
            style={{ height: '290px' }}
            className="duration-300 origin-top-left hover:-rotate-3 w-full h-full rounded-l"
            src={src}
            alt=""
          />
        </div>
      </div>
      <div className="p-8">
        <div>
          {Details.content.map((line, index) => (
            <div key={index} style={{ fontFamily: 'monospace' }} className="my-2 text-lg">
              {line}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Work: React.FC = () => {
  const blockRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const Names = ['Daily Caffine', 'Course Selling Web'];
  const Details: ProjectDetails[] = [
    {
      gitLink: 'https://github.com/notHuman9504/Daily_Caffine',
      image1: 'https://i.ibb.co/Qb5tskD/coffee.png',
      image2: 'https://i.ibb.co/4j2B8KG/cooff.png',
      content: [
        'Daily Caffine is a Web Application, developed using Next.js, Next Auth, MongoDb, Tailwind, MUI.',
        "It is a coffee Web App for simple coffee ordering with it's amazing user interface.",
        'It has authenticaion using next auth,which has been used for oauth service of google.',
        'It has product categorization and horizontal scrolling for more friendly and accessible products to user.',
      ],
    },
    {
      gitLink: 'https://github.com/notHuman9504/Course-Selling-App',
      image1: 'https://i.ibb.co/ZdvY2tP/cs1.png',
      image2: 'https://i.ibb.co/dpVhXs0/cs2.png',
      content: [
        'Course Selling App is a Web Application, developed using MERN Stack, Recoil, MUI.',
        'It is a Web App for selling your course to other users or you can buy courses of other users.',
        'Recoil a State Management library for React is used for efficient rendering of components.',
      ],
    },
  ];

  return (
    <div style={{ cursor: 'none' }} className="p-12">
      <div>
        <h1 style={{ fontFamily: 'Saira Condensed' }} className="text-[60px] my-4">
          My Work
        </h1>
        {blockRefs.map((ref, index) => (
          <div key={index} className="flex justify-end m-8 my-16">
            <ProgressBar topic={Names[index]} targetRef={ref} />
            <div ref={ref} className="h-full"></div>
            <div className="w-2/4 mx-20">
              <Project Details={Details[index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
