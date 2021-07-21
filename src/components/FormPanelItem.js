import { useState } from 'react';
import ReactModal from "react-modal";

import Form from './Forms/Form';


ReactModal.setAppElement('#root');

const FormPanelItem = (props) => {

  const [modal, setModal] = useState(false);

  return (
    <div>
      <a
        className={`${props.content.class} lg:text-2xl sm:text-lg text-2xl bg-cover bg-center hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 flex justify-center items-center py-8 px-4 m-1 text-white h-40 md:h-60 transition-all`}
        onClick={() => setModal(true)}
      >
        <span className='bg-gray-200 rounded text-black sm:py-2 lg:py-2 py-2 px-10'>
          {props.content.title}
        </span>
      </a>

      <ReactModal
        isOpen={modal}
        onAfterOpen={() => {
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
        }}
        onAfterClose={() => {
          const scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }}
        onRequestClose={() => setModal(false)}
      >
        <Form
          heading={props.content.heading}
          name={props.content.name}
          imgTop={props.content.imgTop}
          imgBottom={props.content.imgBottom}
          form={props.content.form}
        />

        <button
          className='bg-gray-200 px-10 py-2 rounded hover:bg-gray-300'
          onClick={() => setModal(false)}>Close</button>
      </ReactModal>
    </div >
  )
}

export default FormPanelItem;