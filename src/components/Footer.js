
import { ReactComponent as Mail } from '../img/mail.svg';
import { ReactComponent as FCC } from '../img/FCC.svg';
import { ReactComponent as Phone } from '../img/phone.svg';
import { ReactComponent as FB } from '../img/fb.svg';
import { ReactComponent as Twitter } from '../img/twitter.svg';

const Footer = () => {

  return (
    <div className='sm:flex sm:justify-between lg:px-60 sm:px-9 px-4 py-4 mt-4 border-t border-gray-100 items-center bg-gray-50 text-sm'>
      <div className='flex items-center justify-center'>
        <FCC className='h-12 w-auto' />
        <p className='font-faseyha px-2 font-thin text-gray-500'>ފުވައްމުލައް ސިޓީ ކައުންސިލް</p>
      </div>
      <div className='flex flex-wrap items-center justify-center' style={{ 'font-size': '0.7rem' }}>
        <div className='flex sm:items-center sm:justify-evenly'>
          <p className='px-2 sm:mt-0 mt-1'><a className='hover:text-teal' href='mail:info@fuvahmulah.gov.mv'>info@fuvahmulah.gov.mv</a></p>
          <Mail className='h-12' />
        </div>
        <div className='flex sm:items-center'>
          <p className='px-2 mt-1 sm:mt-0'><a className='hover:text-teal' href='tel:1618'>1618</a></p>
          <Phone className='h-8 w-auto' />
        </div>
        <div className='flex sm:items-center'>
          <p className='px-2 mt-2 sm:mt-0'><a className='hover:text-teal' href='https://www.facebook.com/fvmcitycouncil/'>fvmcitycouncil/</a></p>
          <FB className='h-10 w-auto' />
        </div>
        <div className='flex sm:items-center'>
          <p className='mt-1 sm:mt-0 px-2'><a className='hover:text-teal' href='https://twitter.com/fvmcouncil?lang=en'>fvmcouncil@</a></p>
          <Twitter className='h-8 w-auto' />
        </div>
      </div>

    </div>

  )
}

export default Footer;