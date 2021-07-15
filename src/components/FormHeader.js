import { ReactComponent as Arrow } from '../img/arrow.svg';

const FormHeader = () => {


  return (
    <div className='flex justify-center items-center sm:px-6 lg:px-52 px-4 font-waheed sm:leading-loose sm:text-2xl text-2xl text-center leading-10 mt-6'>
      <div className='bg-customBlue py-5 px-4 sm:flex sm:flex-col w-full rounded'>
        <p className='text-white mb-2'>އެކި އެކި ސަރަހައްދުތެއް ތަރައްޤީ ކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް ލިޔުމަކުން ނުވަތަ ކުރެހުމަކުން</p>
        <p className='bg-blue-300 sm:px-16 rounded-lg mx-auto font-sans'><a className='hover:text-blue-500 font-noto text-xl' href='mail:myvoice@fuvahmulah.gov.mv'>myvoice@fuvahmulah.gov.mv</a> </p>
        <p className='text-white mt-2'>ހާ އީމެއިލްކޯދިނުން އެދެން. ނުންވީ ތިރެއި މިވޭ ލިންކުތެކެން ފެނޮވާދިނުން އެދެން</p>
        <Arrow className='h-16 w-auto mx-auto' />
      </div>
    </div>
  );
}

export default FormHeader;