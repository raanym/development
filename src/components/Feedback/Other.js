import React from "react";
import { Link } from "react-router-dom";

const Other = () => {

  return (
    <div className='font-magRound font-bold flex flex-col mt-10'>
      <Link className='inline-block hover:text-green-600 text-green-500 text-xl' to='/area-development'>އިކި އިކި ސަރަހައްދުތެއް ތަރައްޤީކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް</Link>
      <a className='inline-block hover:text-green-600 text-green-500 text-xl mt-5' target='_blank' href='https://forms.gle/jKoMokA8MEfnAVDU8'>އެހެންކަންކަމަށް ޚިޔާލު ފޮނުވުމަށް</a>
    </div>
  )
}

export default Other;