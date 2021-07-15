import logo from '../img/logo.png';

const HeaderTop = () => {


  return (
    <div className='flex items-center justify-center py-2'>
      <a href='https://plan.fuvahmulah.gov.mv'>
        <img src={logo} className='w-20' />
      </a>
    </div>
  )
}

export default HeaderTop;