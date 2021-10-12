import React from "react";
import { ReactComponent as CompletedIcon } from '../../img/completed.svg';

const data = [
  {
    link: 'https://google.com',
    name: 'ބިދޭސީންނާއި ބެހޭ ޤަވާއިދު'
  },
  {
    link: 'https://google.com',
    name: 'ޕާކިންގ ޤަވާއިދު'
  }
]

const ClosedFeedBackLink = (props) => {
  return <a href={props.href} className='inline-block hover:text-blue-600 text-blue-500 text-xl mt-5 font-magRound'>{props.children}</a>
}

const ClosedFeedback = () => {

  return (
    <div className='relative mt-10 flex justify-between md:justify-start'>
      <div>
        <h2 className='text-4xl my-4 font-waheed'>ނިމިފައިހުރި  ކަންކަން</h2>
        <div className='flex flex-col'>
          {data.map(link => {
            return <ClosedFeedBackLink href={link.link}>{link.name}</ClosedFeedBackLink>;
          })}
        </div>
      </div>
      <CompletedIcon className='absolute left-10 md:-bottom-20 h-28 mt-2 md:h-auto md:w-96 opacity-90 md:mt-20 md:mr-44 sm:h-48 sm:w-60 hidden sm:block' />
    </div>
  );
}

export default ClosedFeedback;