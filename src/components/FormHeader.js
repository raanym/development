import { ReactComponent as Arrow } from '../img/arrow.svg';

const FormHeader = () => {


  return (
    <div className='flex justify-center items-center sm:px-52 px-4 font-waheed sm:leading-loose sm:text-2xl text-2xl text-center leading-10 mt-4'>
      <div className='bg-tealLight py-5 px-4 sm:flex sm:flex-col w-full'>
        <p>އެކި އެކި ސަރަހައްދުތެއް ތަރައްޤީ ކުރުމުގެ ޚިޔާލާ އަދި ކޮންސެޕްޓް ލިޔުމަކުން ނުވަތަ ކުރެހުމަކުން</p>
        <p className='bg-white px-16 rounded-lg mx-auto font-sans'><a className='hover:text-yellow-700' href='mail:eoc@fuvahmulah.gov.mv'>eoc@fuvahmulah.gov.mv</a> </p>
        <p>ހާ އީމެއިން ކޯދިނުން އެދެން. ނުވަތަ ތިރެއި މިވޭ ލިންކުތެކެން ފެނޮވާދެއްވާ</p>
        <Arrow className='h-16 w-auto mx-auto' />
      </div>
    </div>
  );
}

export default FormHeader;