import { ReactComponent as Arrow } from '../img/arrow.svg';

const FormHeader = () => {


  return (
    <div className='flex  justify-center items-center sm:px-52 px-4 font-waheed sm:leading-loose sm:text-2xl text-2xl text-center leading-10 mt-4'>
      <div className='bg-yellow-300 py-5 px-4 sm:flex sm:flex-col w-full'>
        <p>އެކި އެކި ސަރަހައްދުތައް ތަރައްޤީ ކުރުމުގެ ޚިޔާލާއި ކޮންސެޕްޓް ލިޔުމަކުން ނުވަތަ ކުރެހުމަކުން</p>
        <p className='bg-yellow-200 font-sans'><a className='hover:text-yellow-700' href='mail:eoc@fuvahmulah.gov.mv'>eoc@fuvahmulah.gov.mv</a> </p>
        <p>އަށް އީމެއިން ކޮށްދެއްވުން އެދެމެވެ. ނުވަތަ ތިރީގައިމިވާ ލިންކުތަކުން ފޮނުވައިދެއްވާ</p>
        <Arrow className='h-16 w-auto mx-auto' />
      </div>
    </div>
  );
}

export default FormHeader;