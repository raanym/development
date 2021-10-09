import { ReactComponent as Arrow } from '../img/arrow.svg';
import { ReactComponent as Idea } from '../img/idea-heading.svg'

const FormPanelHeader = () => {


  return (
    <div className='flex justify-center items-center sm:px-6 lg:px-52 px-4 font-waheed sm:leading-loose sm:text-2xl text-2xl leading-10 mt-2'>
      <div className='pb-4 sm:px-0 sm:flex sm:flex-col w-full rounded bg-gray-100'>
        <h2 className='bg-blue-300 flex items-center rounded px-4 leading-relaxed sm:px-0 text-3xl md:text-4xl md:h-40 h-52 mb-5'><Idea className='sm:h-20 h-24 inline mx-4' /> އިކި އިކި ސަރަހައްދުތެއް ތަރައްޤީކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް</h2>
        <p className='text-gray-600 text-center mb-2 px-4 sm:px-0 mx-auto'>އިކި އިކި ސަރަހައްދުތެއް ތަރައްޤީ ކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް ލިޔުމަކުން ނުވަތަ ކުރެހުމަކުން</p>
        <p className='bg-gray-200 sm:px-16 rounded-lg mx-auto text-center font-sans w-4/5'><a className='hover:text-blue-500 font-noto text-xl' href='mail:myvoice@fuvahmulah.gov.mv'>myvoice@fuvahmulah.gov.mv</a> </p>
        <p className='text-gray-600 mt-2 px-4 sm:px-0 mx-auto text-center'>ހާ އީމެއިލްކޯދިނުން އެދެން. ނުންވީ ތިރެއި މިވޭ ލިންކުތެކެން ފެނޮވާދިނުން އެދެން</p>
        <Arrow className='h-16 w-auto mx-auto' />
      </div>
    </div>
  );
}

export default FormPanelHeader;