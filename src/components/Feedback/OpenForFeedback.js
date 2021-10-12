import React from "react";
import { Link } from "react-router-dom";
import GavaaidhuMain from "./GavaaidhuMain";
import Other from "./Other";
// import { ReactComponent as FeedbackIcon } from '../../img/feedback.svg';
import { ReactComponent as FeedbackIcon } from '../../img/feedback-customer.svg';

const OpenForFeedback = () => {

  return (
    <div className='relative sm:flex sm:justify-between md:justify-start'>
      <div>
        <h2 className='text-4xl my-4 py-4 font-waheed'>ޚިޔާލަށް ހުޅުވިފައި</h2>
        <GavaaidhuMain />
        <Other />
      </div>
      <FeedbackIcon className='absolute md:-top-32 left-0 top-0 md:w-96 md:h-auto h-48 w-60 md:mt-20 opacity-90 sm:block hidden' />
    </div>
  );
}

export default OpenForFeedback;