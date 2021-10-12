import React from "react";
import ReactModal from "react-modal";
import './Form.css';

ReactModal.setAppElement('#root');

const EmbedForm = () => {

  return (
    <React.Fragment>
      <iframe className='form' src="https://forms.office.com/Pages/ResponsePage.aspx?id=bh8sE-4Yyk2WXGiCYR05egGMLM-tDKxGtpZcj-zGW6tUNkNZWFQ5NTdBU0xWNDIwWEpIR1NNSk5MNC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </React.Fragment>
  )
}

export default EmbedForm;