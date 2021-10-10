import Gavaaidhu from "./Gavaaidhu";
import MassalaSurvey from "../MassalaSurvey";

const data = [
  {
    name: 'ބިމާއި ބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://microsoft.com'
  },
  {
    name: 'ބަނދަރު ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://microsoft.com'
  },
  {
    name: 'ވެލި ނެގުމާއިބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://microsoft.com'
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