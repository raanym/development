import './FormContent.css';

const FormContent = (props) => {

  const formContent = [
    { title: 'ތޫނޑު', class: 'form-el bg-thundi' },
    { title: 'ބަނދަރޮ ސަރަހައްދު', class: 'form-el bg-harbour' },
    { title: 'ބިޅިފޭށި', class: 'form-el bg-bilhifeyshi' },
    { title: 'ރަސްމީ ބޯޅަދަނޑޮ', class: 'form-el bg-rasmee-dhandu' },
    { title: 'ދަޑިމަގި ކިޅިއާ ވީދަޑޮ', class: 'form-el bg-dkilhi' },
    { title: 'ބަންޑާރަކިޅިއާ ވީދަޑޮ', class: 'form-el bg-bkilhi' },
    { title: 'ސްޕޯޓްސް ޕާކް', class: 'form-el bg-scomplex' },
    { title: 'ދޫނޑިގަން ސްޕޯޓްސް އެރީނާ', class: 'form-el bg-dhg-arena' },
    { title: 'ދަޑިމަގި ސްޕޯޓްސް އެރީނާ', class: 'form-el bg-dha-arena' },
    { title: 'އެހެން ސަރަހައްދެއްވެސް ތަރައްޤީކުރަން ޚިޔާލެއްވާނަމަ ފޮނުވައިދެއްވާ' }
  ]


  return (
    <div className='sm:px-52 px-2 sm:grid sm:grid-cols-3 block flex flex-col font-waheed leading-loose'>
      {formContent.map((content, i) => {
        if ((formContent.length - 1) === i) {
          return <a href='#' key={content.title} className={`${content.class} bg-cover opacity-70 hover:opacity-100 text-2xl flex justify-center items-center py-8 px-4 bg-gray-300 m-1 col-span-2`}>{content.title}</a>
        } else if ((formContent.length - 2) === i) {
          return <a href='#' key={content.title} className={`${content.class} row-span-2 bg-cover hover:text-gray-200 opacity-70 hover:opacity-100 text-2xl flex justify-center items-center py-8 px-4 bg-gray-300 m-1 hover:bg-gray-400 hover:text-xl`}>{content.title}</a>
        } else {
          return <a href='#' key={content.title} className={`${content.class} bg-cover hover:text-teal transform hover:text-3xl opacity-70 hover:opacity-100 text-2xl flex justify-center items-center py-8 px-4 bg-gray-300 m-1 hover:bg-gray-700 h-40`} > {content.title}</a>
        }

      })}
    </div >
  )
}

export default FormContent;