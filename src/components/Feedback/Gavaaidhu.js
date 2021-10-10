import React from "react";

const Gavaaidhu = (props) => {

  return (
    <div className='font-magRound mt-4'>
      <h3 className='font-bold text-xl mb-2'>{props.name}</h3>
      <a href={props.download} target='_blank' className='font-faseyha text-green-500 hover:text-green-800'>ޑައުންލޯޑް</a>
      <a className='font-faseyha mr-6 text-green-500 hover:text-green-800' target='_blank' href={props.form}>ޚިޔާލު ފޮނުއްވާ</a>
    </div>
  )
}

export default Gavaaidhu;