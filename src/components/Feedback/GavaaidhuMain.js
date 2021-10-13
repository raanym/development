import Gavaaidhu from "./Gavaaidhu";
import './hover.css';

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
    name: 'ވެލި ނެގުމާއި ބެހޭ ޤަވާއިދު',
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