import React from "react";
import { Link } from "react-router-dom";

const MainLink = (props) => {

  return <div className={`font-waheed mt-2`}>
    <Link to={props.to} className={`${props.className} flex flex items-center justify-center rounded px-4 leading-relaxed sm:px-0 text-xl md:text-2xl md:py-10`}>
      {props.children}
    </Link>
  </div>

}

export default MainLink;