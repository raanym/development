import React from "react";
import CompletedIcon from '../../img/completed.png';

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
  return <a href={props.href} className='inline-block hover:text-green-600 text-green-500 text-xl mt-5 font-magRound'>{props.children}</a>
}

const ClosedFeedback = () => {

  return (
    <div className='mt-10 flex justify-between md:justify-start'>
      <div>
        <h2 className='text-3xl my-4 font-magRound'>ނިމިފައިހުރި  ކަންކަން</h2>
        <div className='flex flex-col'>
          {data.map(link => {
            return <ClosedFeedBackLink href={link.link}>{link.name}</ClosedFeedBackLink>;
          })}
        </div>
      </div>
      <img src={CompletedIcon} className='h-28 mt-2 md:h-32 md:mt-20 md:mr-44' />
    </div>
  );
}

export default ClosedFeedback;