import { ReactComponent as Thoondu } from '../img/thoondu.svg';

const FormContent = (props) => {

  const formContent = [
    { title: 'ތޫނޑު', image: <Thoondu className='w-20 h-20' /> },
    { title: 'ބަނދަރޮ ސަރަހައްދު' },
    { title: 'ބިޅިފޭށި' },
    { title: 'ރަސްމީ ބޯޅަދަނޑޮ' },
    { title: 'ދަޑިމަގި ކިޅިއާ ވީދަޑޮ' },
    { title: 'ބަންޑާރަކިޅިއާ ވީދަޑޮ' },
    { title: 'ސްޕޯޓްސް ޕާކް' },
    { title: 'ދޫނޑިގަން ސްޕޯޓްސް އެރީނާ' },
    { title: 'ދަޑިމަގި ސްޕޯޓްސް އެރީނާ' },
    { title: 'އެހެން ސަރަހައްދެއްވެސް ތަރައްޤީކުރަން ޚިޔާލެއްވާނަމަ ފޮނުވައިދެއްވާ' }
  ]

  const hoverHandler = (e) => {

    if (!e.target.classList.contains('bg-blue-500')) {
      e.target.classList.add('bg-blue-500');
    } else {
      e.target.classList.remove('bg-blue-500');
    }
  }


  return (
    <div className='sm:px-52 px-2 sm:grid sm:grid-cols-3 block flex flex-col font-faseyha text-xl leading-loose'>
      {formContent.map((content, i) => {
        if ((formContent.length - 1) === i) {
          return <a href='#' key={content.title} className='hover:bg-gray-300 py-8 px-4 bg-blue-300 m-2 sm:col-span-2'>{content.title}</a>
        } else if ((formContent.length - 2) === i) {
          return <a href='#' key={content.title} className='hover:bg-gray-400 py-8 px-4 bg-gray-300 m-2 sm:row-span-2 block'>{content.title}</a>
        } else {
          return <a href='#' key={content.title} className='flex justify-between py-8 px-4 bg-gray-300 m-2 hover:bg-gray-400' > {content.title} {content.image}</a>
        }

      })}
    </div >
  )
}

export default FormContent;