import React from "react";

const Gavaaidhu = (props) => {

  return (
    <div className='font-magRound mt-4'>
      <h3 className='font-bold text-xl mb-2'>{props.name}</h3>
      <a href={props.download} target='_blank' className='text-lg font-magRound text-blue-500 hover:text-blue-800'>ޑައުންލޯޑް</a>
      <a className='font-waheed mr-6 text-blue-500 hover:text-blue-800 text-lg' target='_blank' href={props.form}>ޚިޔާލު ފޮނުއްވާ</a>
    </div>
  )
}

export default Gavaaidhu;