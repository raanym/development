import React from "react";
import { Link } from "react-router-dom";

const Gavaaidhu = (props) => {

  return (
    <li className='border-b-2 border-gray-200 rounded-lg sm:py-4 py-3 font-faseyha font-thin text-thin'>
      <h3 className='leading-relaxed text-lg mb-2 word-break text-gray-800'>{props.name}</h3>
      <a href={props.download} target='_blank' className='text-base text-blue-500 hover:text-blue-800'>ޑައުންލޯޑް</a>
      <Link className='tracking-tighter mr-6 text-blue-500 hover:text-blue-800 text-base' to={props.form}>ޚިޔާލު ފޮނުއްވާ</Link>
    </li>
  )
}

export default Gavaaidhu;