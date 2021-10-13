import Gavaaidhu from "./Gavaaidhu";
import './hover.css';

const data = [
  {
    name: 'އާންމުންނާއި ސަރުކާރުގެ އެކި މުއަސަސާތަކަށާއި ކުންފުނިތަކަށް ބިން ދޫކުރުމާއި ބިން ގެންގުޅުމާއިބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/proposals-and-regulations-form'
  },
  {
    name: 'ބަނދަރަށް އުޅަނދުފަހަުރު ބަނދަރުކުރުމާއި، ބަނދަރުގައި މަސްކެނޑުމާއި އަދި އެހެން ކަންކަމާއި ބެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/proposals-and-regulations-form'
  },
  {
    name: 'ފުވައްމުލަކު ސިޓީގެ ގޮނުދޮށުން ވެލި، އަކިރި، ގާ އަދި މުރަކަ ފަދަތަކެތި ނެގުމާއި، ރަށުގެ އެކި ހިސާބުތަކުން ކަޅުފަސް ނެގުން ހުއްޓުވުމާބެހޭ ގަވާއިދު (ޑްރާފްޓް)',
    download: 'https://google.com',
    form: '/proposals-and-regulations-form'
  },
  {
    name: 'ރަށުތެރޭގައި ބިލްބޯޑްތަކާއި އެހެނިހެން ޕްރޮމޯޝަނަލް ބޯޑުތައް ބެހެޓުމުގައި އަމަލުކުރަންޖެހޭ ޤަވާއިދު',
    download: 'https://google.com',
    form: '/proposals-and-regulations-form'
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