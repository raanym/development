import React from "react";
import './Form.css';

const EmbedForm = (props) => {

  return (
    <React.Fragment>
      <iframe className='form' src={props.src} frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </React.Fragment>
  )
}

export default EmbedForm;