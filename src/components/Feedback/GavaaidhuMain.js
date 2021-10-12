import Gavaaidhu from "./Gavaaidhu";
import MassalaSurvey from "../MassalaSurvey";

const data = [
  {
    name: 'ބިމާއި ބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/form'
  },
  {
    name: 'ބަނދަރު ޤަވާއިދު',
    download: 'https://google.com',
    form: '/form'
  },
  {
    name: 'ވެލި ނެގުމާއިބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/form'
  },
  {
    name: 'ބިލްބޯޑް ބެހެއްޓުމާއިބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/form'
  }
]

const GavaaidhuMain = () => {


  return (
    <div className='font-waheed'>
      <div>
        {data.map(_data => {
          return <Gavaaidhu name={_data.name} download={_data.download} form={_data.form} />
        })}
      </div>
    </div>
  )
}

export default GavaaidhuMain;