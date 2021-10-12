import React from "react";
import { Link } from "react-router-dom";

const Gavaaidhu = (props) => {

  return (
    <div className='font-waheed font-thin mt-4 text-thin'>
      <h3 className='text-lg mb-2'>{props.name}</h3>
      <a href={props.download} target='_blank' className='font-faseyha font-thin text-sm text-blue-500 hover:text-blue-800'>ޑައުންލޯޑް</a>
      <Link className='font-faseyha font-thin tracking-tighter mr-6 text-blue-500 hover:text-blue-800 text-sm' to={props.form}>ޚިޔާލު ފޮނުއްވާ</Link>
    </div>
  )
}

export default Gavaaidhu;