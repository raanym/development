const FormContent = () => {

  const formContent = [
    { title: 'ތޫނޑު' },
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

  if (formContent[0])

    return (
      <div className='sm:px-52 px-4 sm:grid sm:grid-cols-3'>
        {formContent.map((content, i) => {
          if ((formContent.length - 1) === i) {
            return <a href='' className='py-8 bg-blue-200 m-2 sm:col-span-2'>{content.title}</a>
          } else if ((formContent.length - 2) === i) {
            return <a href='' className='py-8 bg-blue-200 m-2 sm:row-span-2'>{content.title}</a>
          } else {
            return <a href='' className='py-8 bg-blue-200 m-2' > {content.title}</a>
          }

        })}
      </div >
    )
}

export default FormContent;