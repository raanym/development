import Gavaaidhu from "./Gavaaidhu";
import './hover.css';

const data = [
  {
    name: 'ތަރައްޤީގެ ޕްލޭނަށް ޚިޔާލު ހޯދުން ',
    download: 'https://download.fuvahmulah.gov.mv/files/Fuvahmulah Development Plan 2022 - 2026  - Public Opinion.docx',
    form: '/feedback-on-council-papers'
  },
]

const GavaaidhuMain = () => {


  return (
    <div className='font-waheed relative'>
      <ul className='hoverEffect'>
        {data.map(_data => {
          return <Gavaaidhu name={_data.name} download={_data.download} form={_data.form} />
        })}
      </ul>
    </div>
  )
}

export default GavaaidhuMain;