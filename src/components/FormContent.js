import { ReactComponent as Idea } from '../img/idea.svg';

const FormContent = (props) => {

  const formContent = [
    { title: 'ތޫނޑު', class: 'bg-thundi', link: 'https://forms.gle/FDfzMtjprBPwTYB9A' },
    { title: 'ބަނދަރޮ ސަރަހައްދު', class: 'bg-harbour', link: 'https://forms.gle/eLQJF7M5yb2HeHf1A' },
    { title: 'ބިޅިފޭށި', class: 'bg-bilhifeyshi', link: 'https://forms.gle/LkcKrUpFBEbrPpDU6' },
    { title: 'ރަސްމީ ބޯޅަދަނޑޮ', class: 'bg-rasmee-dhandu', link: 'https://forms.gle/w13EQMeiz1aryVQh9' },
    { title: 'ދަޑިމަގި ކިޅި / ވީދަޑޮ', class: 'bg-dkilhi', link: 'https://forms.gle/S2N9LAGqmQ99NgJ46' },
    { title: 'ބަންޑާރަކިޅި / ވީދަޑޮ', class: 'bg-bkilhi', link: 'https://forms.gle/vAwfZYfFR7oR3zdq6' },
    { title: 'މާދަޑޮ ސްޕޯޓްސް އެރީނާ', class: 'bg-scomplex', link: 'https://forms.gle/HtoskikYoEk3SdL5A' },
    { title: 'ދޫނޑިގަން ސްޕޯޓްސް އެރީނާ', class: 'bg-dhg-arena', link: 'https://forms.gle/ugrrfVCmTVwA71gZA' },
    { title: 'ދަޑިމަގޮ ސްޕޯޓްސް އެރީނާ', class: 'bg-dha-arena', link: 'https://forms.gle/5iUwWxVeQcFsuEv56' },
    { title: 'އެހެން ސަރަހައްދެއްވެސް ތަރައްޤީކުރަން ޚިޔާލެއްވާނަމަ ފޮނުވައިދެއްވާ', link: 'https://forms.gle/jKoMokA8MEfnAVDU8' }
  ]


  return (
    <div className='sm:px-52 px-2 sm:grid sm:grid-cols-3 block flex flex-col font-waheed leading-loose'>
      {formContent.map((content, i) => {
        if ((formContent.length - 1) === i) {
          return <a href={content.link} target='_blank' key={content.title} className={`${content.class} bg-cover text-2xl flex justify-center items-center py-8 px-4 bg-yellow-300 hover:bg-yellow-400 m-1 col-span-2`}><Idea className='inline h-20 ml-4' />{content.title}</a>
        } else if ((formContent.length - 2) === i) {
          return <a href={content.link} target='_blank' key={content.title} className={`${content.class} text-white h-40 sm:h-auto row-span-2 bg-cover hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 text-2xl flex justify-center items-center py-8 px-4 bg-gray-300 m-1 hover:bg-gray-400 transition-all`}><span className='bg-gray-900 py-2 px-10'>{content.title}</span></a>
        } else {
          return <a href={content.link} target='_blank' key={content.title} style={{ 'font-size': '1.5rem' }} className={`${content.class} bg-cover hover:text-gray-100 sm:opacity-80 sm:hover:opacity-100 flex justify-center items-center py-8 px-4 m-1 text-white h-40 md:h-60 transition-all`} > <span className='bg-gray-900 py-0 px-10'>{content.title}</span></a>
        }

      })}
    </div >
  )
}

export default FormContent;