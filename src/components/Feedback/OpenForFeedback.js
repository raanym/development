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
      <blockquote className="self-center row-span-2 relative shadow-lg p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote bg-white font-faseyha row-span-1 hidden sm:block">
        <div className="stylistic-quote-mark" aria-hidden="true">
          &ldquo;
        </div>
        <p className="mb-4 text-base text-gray-500 leading-relaxed">ކޮންމެ ކަމެއްވެސް ނިންމުމާއި ބައްޓަންކުރުމުގައި އެންމެ ފުރަތަމަ ހޯދާނީ ރައްޔިތުންގެ ލަފާ އަދި ޚިޔާލުތައް، މިކަންކަމައް ބެލީމަ އެނގެނީ ރައްޔިތުން ބޭނުންވާ ގޮތްތަކަކީ ކޮބައިކަން!</p>
        <cite className="flex items-center">
          <div className="flex flex-col items-start">
            <span className="mb-1 text-teal text-base font-waheed">އިސްމާޢީލް ރަފީޤް</span>
            <a
              href="..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              ފުވައްމުލައް ސިޓީ މޭޔަރ
            </a>
          </div>
        </cite>
      </blockquote>
      {/* <FeedbackIcon className='absolute md:-top-32 left-0 top-0 md:w-96 md:h-auto h-48 w-60 md:mt-20 opacity-90 sm:block hidden' /> */}
    </div >
  );
}

export default OpenForFeedback;