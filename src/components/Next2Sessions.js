import { ReactComponent as DateIcon } from '../img/dateIcon.svg';
import { ReactComponent as Clock } from '../img/clock.svg';
import { ReactComponent as Zoom } from '../img/zoom.svg';


const Next2Sessions = (props) => {

  const today = new Date();

  const filteredSessions = props.sessions.filter((session, i) => {
    if (session.date.getDate() >= today.getDate()) {
      return session;
    }
  }).slice(0, 2);

  const dateTime = (date) => {
    let month;
    switch (date) {
      case 0:
        month = 'ޖަނަވަރީ'
        break;
      case 1:
        month = 'ފެބުރުއަރީ'
        break;
      case 2:
        month = 'މާރިޗް'
        break;
      case 3:
        month = 'އެޕްރީލް'
        break;
      case 4:
        month = 'މެއި'
        break;
      case 5:
        month = 'ޖޫން'
        break;
      case 6:
        month = 'ޖުލައި'
        break;
      case 7:
        month = 'އޯގަސްޓް'
        break;
      case 8:
        month = 'ސެޕްޓެމްބަރ'
        break;
      case 9:
        month = 'އޮކްޓޯބަރ'
        break;
      case 10:
        month = 'ނޮވެމްބަރ'
        break;
      case 11:
        month = 'ޑިސެމްބަރ'
        break;
    }
    return month;
  }


  const buttonHandler = () => {
    props.click();
  }

  return (
    <div className='lg:px-52 sm:px-4 px-4 font-faseyha bg-customGreen h-auto'>
      <div className='p-6 mt-6'>
        <h2 className='font-waheed text-2xl sm:text-3xl'>ކުރިހާ ތީ ސެޝަންތެއް</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8 sm:gap-4 sm:gap-x-2 md:gap-x-4 lg:gap-x-10 md:gap-4 p-2 mt-2'>
          {filteredSessions.map(session => {
            return <div key={session.name} className='font-bold text-xl'>
              <h3 className='bg-customGreenLight rounded py-1 px-2 mb-2'>{session.name}</h3>
              <div className=''>
                <DateIcon className=' h-8 w-auto inline' />
                <p className='px-2 inline'>{`${session.date.getDate()} ${dateTime(session.date.getMonth())} ${session.date.getFullYear()}`}</p>
              </div>
              <div className='mt-2'>
                <Clock className='w-auto inline' style={{ height: '2.2rem' }} />
                <p className='inline px-2'>{`${session.date.getHours()}:${session.date.getSeconds()}0`}</p>
              </div>
              <div className='mt-1'>
                <Zoom className='h-8 w-auto inline ml-2' />
                <a href={session.link} className='text-black hover:text-green-900'>
                  ޒޫމް ލިންކް</a>
              </div>
            </div>
          })}
        </div>
        <button className='bg-customGreenLight hover:bg-green-500 px-4 py-2 rounded' onClick={buttonHandler}>އިތުރި ސެޝަންތައް</button>
      </div>
    </div >
  )
}

export default Next2Sessions;