import { Link } from 'react-router-dom';
import './hover.css';

const Other = () => {

  return (
    <ul className='hoverEffect font-faseyha font-thin flex flex-col mt-10 border-l-2 border-dashed sm:w-1/2 lg:w-2/3 sm:w-1/2 lg:w-2/3'>
      <li >
        {/* <Link className='inline-block hover:text-blue-600 text-blue-500 text-lg' to='/area-development'>އިކި އިކި ސަރަހައްދުތެއް ތަރައްޤީކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް</Link> */}
        <Link to='/general-feedback' className='inline-block hover:text-blue-600 text-blue-500 text-lg'>އާންމު ޚިޔާލު</Link>
      </li>
    </ul>
  )
}

export default Other;