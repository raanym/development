import { useState } from 'react';
import ReactModal from "react-modal";

import Form from './Forms/Form';
import { ReactComponent as Idea } from '../img/idea.svg';

const FormPanelLinks = (props) => {

  const formContent = [
    { title: 'ތޫނޑު', class: 'bg-thundi', link: 'https://forms.gle/FDfzMtjprBPwTYB9A', beading: 'Development of Thoondu', name: 'Thoondu' },
    { title: 'ބަނދަރޮ ސަރަހައްދު', class: 'bg-harbour', link: 'https://forms.gle/eLQJF7M5yb2HeHf1A' },
    { title: 'ބިޅިފޭށި', class: 'bg-bilhifeyshi', link: 'https://forms.gle/LkcKrUpFBEbrPpDU6' },
    { title: 'ރަސްމީ ބޯޅަދަނޑޮ', class: 'bg-rasmee-dhandu', link: 'https://forms.gle/w13EQMeiz1aryVQh9' },
    { title: 'ދަޑިމަގި ކިޅި / ވީދަޑޮ', class: 'bg-dkilhi', link: 'https://forms.gle/S2N9LAGqmQ99NgJ46' },
    { title: 'ބަންޑާރަކިޅި / ވީދަޑޮ', class: 'bg-bkilhi', link: 'https://forms.gle/vAwfZYfFR7oR3zdq6' },
    { title: 'މާދަޑޮ ސްޕޯޓްސް އެރީނާ', class: 'bg-scomplex', link: 'https://forms.gle/HtoskikYoEk3SdL5A' },
    { title: 'ދޫނޑިގަން ސްޕޯޓްސް އެރީނާ', class: 'bg-dhg-arena', link: 'https://forms.gle/ugrrfVCmTVwA71gZA' },
    { title: 'ދަޑިމަގޮ ސްޕޯޓްސް އެރީނާ', class: 'bg-dha-arena', link: 'https://forms.gle/5iUwWxVeQcFsuEv56' },
    { title: 'ފުވައްމުލައް ސްޓޭޑިއަމް', class: 'bg-stadium', link: 'https://forms.gle/mse5iMy8H5tvc1W97' },
    { title: 'ކަނދޮވަލި ދަޑޮ', class: 'bg-kandhoval', link: 'https://forms.gle/4pPRpp5M9i24qAiH9' },
    { title: 'އެހެން ސަރަހައްދަކިސް ތަރައްގީ ކެރަންނަ ޚިޔާލާއް އޮއްފަހެނާ ފެނޮވާދިނުން އެދެން', link: 'https://forms.gle/8XL8wUEieRpH6wJP9' }
  ]

  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '500px', // <-- This sets the height
      overlfow: 'hidden' // <-- This tells the modal to scrol
    }
  };


  return (
    <div className='lg:px-52 sm:px-6 px-2 sm:grid sm:grid-cols-3 block flex flex-col font-waheed leading-relaxed'>
      {formContent.map((content, i) => {
        if (content.heading) {

          return <div className=''>
            <ReactModal isOpen={modal}
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
              onRequestClose={modalToggle}>
              <Form heading={content.heading} name={content.name} />
              <button className='bg-gray-200 px-10 py-2 rounded hover:bg-gray-300' onClick={modalToggle}>Close</button>
            </ReactModal>
            <a
              onClick={modalToggle}
              key={content.title}
              className={`${content.class} lg:text-2xl sm:text-lg text-2xl bg-cover bg-center hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 flex justify-center items-center py-8 px-4 m-1 text-white h-40 md:h-60 transition-all`} >
              <span className='bg-gray-200 rounded text-black sm:py-2 lg:py-2 py-2 px-10'>{content.title}</span>
            </a></div>
        }

        if ((formContent.length - 1) === i) {
          return <a href={content.link}
            target='_blank'
            key={content.title}
            propData={content}
            className={`${content.class} text-white sm:text-lg text-2xl lg:text-2xl flex justify-center items-center py-8 px-4 bg-customBlue hover:bg-blue-700 m-1 col-span-2`}>
            <Idea className='inline h-20 ml-4' />
            {content.title}
          </a>
        } else if ((formContent.length - 3) === i) {
          return <a href={content.link} target='_blank' key={content.title} className={`${content.class} text-white sm:text-lg text-2xl lg:text-2xl h-40 col-span-2 bg-cover bg-center hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 text-2xl flex justify-center items-center py-8 px-4 bg-gray-300 m-1 hover:bg-gray-400 transition-all`}><span className='bg-gray-100 rounded text-black py-2 px-10'>{content.title}</span></a>
        } else if ((formContent.length - 2) === i) {
          return <a href={content.link} target='_blank' key={content.title} className={`${content.class} text-black sm:text-lg text-2xl lg:text-2xl h-40 sm:h-auto row-span-2 bg-cover bg-center hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 flex justify-center items-center py-8 px-4 m-1 hover:bg-gray-400 transition-all`}><span className='bg-gray-100 rounded text-black py-2 px-10'>{content.title}</span></a>
        }
        else {
          return <a href={content.link} target='_blank' key={content.title} className={`${content.class} lg:text-2xl sm:text-lg text-2xl bg-cover bg-center hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 flex justify-center items-center py-8 px-4 m-1 text-white h-40 md:h-60 transition-all`} > <span className='bg-gray-200 rounded text-black sm:py-2 lg:py-2 py-2 px-10'>{content.title}</span></a>
        }

      })}
    </div >
  )
}

export default FormPanelLinks;