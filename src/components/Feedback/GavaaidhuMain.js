import Gavaaidhu from "./Gavaaidhu";
import MassalaSurvey from "../MassalaSurvey";

const data = [
  {
    name: 'ބިމާއި ބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://forms.office.com/r/4y8CQHgeYi'
  },
  {
    name: 'ބަނދަރު ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://forms.office.com/r/4y8CQHgeYi'
  },
  {
    name: 'ވެލި ނެގުމާއިބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: 'https://forms.office.com/r/4y8CQHgeYi'
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