import React from "react";
import { Link } from "react-router-dom";
import GavaaidhuMain from "./GavaaidhuMain";
import Other from "./Other";
// import { ReactComponent as FeedbackIcon } from '../../img/feedback.svg';
import { ReactComponent as FeedbackIcon } from '../../img/feedback-customer.svg';

const OpenForFeedback = () => {

  const styles = {

  }

  return (
    <div className='relative sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:justify-center sm:justify-items-center sm:gap-4'>
      <div className='col-span-2 row-span-3'>
        < h2 className='text-3xl my-4 py-4 font-waheed' > ޚިޔާލަށް ހުޅުވިފައި</h2 >
        <GavaaidhuMain />
        <Other />
      </div >
      <FeedbackIcon className='md:w-96 md:h-auto h-48 w-60 md:mt-20 opacity-90 sm:block hidden row-span-3 self-center col-span-1' />
    </div >
  );
}

export default OpenForFeedback;