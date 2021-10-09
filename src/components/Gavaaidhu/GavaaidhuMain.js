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
    <div className='font-waheed sm:px-6 lg:px-52 bg-gray-100'>
      <div className='bg-feedback bg-no-repeat bg-center bg-left'>
        <h2 className='text-4xl my-4 py-4'>ޚިޔާލައް ހުޅުވިފައި</h2>
        {data.map(_data => {
          return <Gavaaidhu name={_data.name} download={_data.download} form={_data.form} />
        })}
      </div>
    </div>
  )
}

export default GavaaidhuMain;