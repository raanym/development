import { ReactComponent as Arrow } from '../img/arrow.svg';

const FormPanelHeader = () => {


  return (
    <div className='flex justify-center items-center sm:px-6 lg:px-52 px-4 font-waheed sm:leading-loose sm:text-2xl text-2xl text-center leading-10 mt-2'>
      <div className='pb-4 sm:px-0 sm:flex sm:flex-col w-full rounded bg-gray-100'>
        <h2 className='bg-customBlue rounded text-white px-4 leading-relaxed sm:px-0 text-3xl sm:text-4xl py-5'>އެކި އެކި ސަރަހައްދުތެއް ތަރައްޤީކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް</h2>
        <p className='text-gray-600 mb-2 px-4 sm:px-0'>އެކި އެކި ސަރަހައްދުތެއް ތަރައްޤީ ކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް ލިޔުމަކުން ނުވަތަ ކުރެހުމަކުން</p>
        <p className='bg-gray-200 sm:px-16 rounded-lg mx-auto font-sans w-4/5'><a className='hover:text-blue-500 font-noto text-xl' href='mail:myvoice@fuvahmulah.gov.mv'>myvoice@fuvahmulah.gov.mv</a> </p>
        <p className='text-gray-600 mt-2 px-4 sm:px-0'>ހާ އީމެއިލްކޯދިނުން އެދެން. ނުންވީ ތިރެއި މިވޭ ލިންކުތެކެން ފެނޮވާދިނުން އެދެން</p>
        <Arrow className='h-16 w-auto mx-auto' />
      </div>
    </div>
  );
}

export default FormPanelHeader;