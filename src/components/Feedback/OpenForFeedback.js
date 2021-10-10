import React from "react";
import { Link } from "react-router-dom";
import GavaaidhuMain from "./GavaaidhuMain";
import Other from "./Other";
import { ReactComponent as FeedbackIcon } from '../../img/feedback.svg';

const OpenForFeedback = () => {

  return (
    <div className='flex sm:justify-between md:justify-start'>
      <div>
        <h2 className='text-3xl my-4 py-4 font-magRound'>ޚިޔާލަށް ހުޅުވިފައި</h2>
        <GavaaidhuMain />
        <Other />
      </div>
      <FeedbackIcon className='h-40 md:mt-20' />
    </div>
  );
}

export default OpenForFeedback;