import React from "react";
import { ReactComponent as CompletedIcon } from '../../img/completed.svg';
import './hover.css';

const data = [
  // {
  //   link: 'https://google.com',
  //   name: 'ބިދޭސީންނާއި ބެހޭ ޤަވާއިދު'
  // },
  // {
  //   link: 'https://google.com',
  //   name: 'ޕާކިންގ ޤަވާއިދު'
  // }
]

const ClosedFeedBackLink = (props) => {
  return <li><a href={props.href} className='inline-block hover:text-blue-600 text-blue-500 text-lg mt-5 font-faseyha font-thin'>{props.children}</a></li>
}

const ClosedFeedback = () => {

  return (
    <div className='relative mt-10 flex justify-between md:justify-start'>
      <div>
        <h2 className='text-4xl my-4 font-waheed'>ނިމިފައިހުރި  ކަންކަން</h2>
        <ul className='flex flex-col hoverEffect'>
          {data.map(link => {
            return <ClosedFeedBackLink href={link.link}>{link.name}</ClosedFeedBackLink>;
          })}
        </ul>
      </div>
      <CompletedIcon className='absolute left-10 md:-bottom-20 h-28 mt-2 md:h-auto md:w-96 opacity-90 md:mt-20 md:mr-44 sm:h-48 sm:w-60 hidden sm:block' />
    </div>
  );
}

export default ClosedFeedback;