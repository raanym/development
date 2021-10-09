import React from "react";

const Gavaaidhu = (props) => {

  return (
    <div className='font-faseyha mt-4'>
      <h3 className='font-bold text-xl mb-2'>{props.name}</h3>
      <a href={props.download} className='text-blue-500 hover:text-blue-800'>ޑައުންލޯޑް</a>
      <a className='mr-6 text-blue-500 hover:text-blue-800' href={props.form}>ޚިޔާލު ފޮނުއްވާ</a>
    </div>
  )
}

export default Gavaaidhu;