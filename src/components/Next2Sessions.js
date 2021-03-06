import { ReactComponent as DateIcon } from '../img/dateIcon.svg';
import { ReactComponent as Clock } from '../img/clock.svg';
import { ReactComponent as Zoom } from '../img/zoom.svg';
import { ReactComponent as FB } from '../img/fb-meet.svg';
import { ReactComponent as ClubHouse } from '../img/Clubhouse.svg';
import { ReactComponent as Plus } from '../img/down-arrow.svg';


const Next2Sessions = (props) => {

  const today = new Date();

  const filteredSessions = props.sessions.filter((session, i) => {
    if (session.date.getDate() >= today.getDate()) {
      return session;
    }
  }).slice(0, 2);

  const findMonth = (date) => {

    const months = ['ޖަނަވަރީ', 'ފެބުރުއަރީ', 'މާރިޗް', 'އެޕްރީލް', 'މެއި', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓް', 'ސެޕްޓެމްބަރ', 'ނޮވެމްބަރ', 'ޑިސެމްބަރ']

    return months[date];
  }


  const buttonHandler = () => {
    props.click();
  }

  return (
    <div className='lg:pr-40 sm:px-4 px-4 font-faseyha bg-customGreen h-auto'>
      <div className='p-6 mt-6'>
        <h2 className='font-waheed text-2xl sm:text-3xl'>ކުރިހާ ތީ ސެޝަންތެއް</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8 sm:gap-4 sm:gap-x-2 md:gap-x-4 lg:gap-x-10 md:gap-4 p-2 mt-2'>
          {filteredSessions.map(session => {
            return <div key={session.name} className='font-bold text-lg'>
              <h3 className='bg-customGreenLight rounded py-1 px-2 mb-2'>{session.name}</h3>
              <div className=''>
                <DateIcon className=' h-8 w-auto inline' />
                <p className='px-2 inline'>{`${session.date.getDate()} ${findMonth(session.date.getMonth())} ${session.date.getFullYear()}`}</p>
              </div>
              <div className='mt-2'>
                <Clock className='w-auto inline' style={{ height: '2.2rem' }} />
                <p className='inline px-2'>{`${session.date.getHours()}:${(session.date.getMinutes() === 0) ? '00' : session.date.getMinutes()}`}</p>
              </div>
              <div className='mt-2 border-t border-customGreenLight'>

                {(session.ch === '')
                  ? <ClubHouse style={{ 'height': '2.3rem' }} className='h-10 w-auto inline ml-2 mt-2 opacity-50' />
                  : <a href={session.ch}><ClubHouse style={{ 'height': '2.3rem' }} className='h-10 w-auto inline ml-2 mt-2' /></a>}

                {(session.fb === '')
                  ? <FB className='h-8 w-auto inline ml-2 mt-2 opacity-50' />
                  : <a href={session.fb}><Zoom className='h-10 w-auto inline ml-2 mt-2' /></a>}
              </div>
            </div>
          })}
        </div>
        <button className='flex items-center bg-customGreenLight font-bold hover:bg-green-500 px-2 py-2 rounded' onClick={buttonHandler}><Plus className='ml-3 h-8 w-6' />އިތިރި ސެޝަންތެއް</button>
      </div>
    </div >
  )
}

export default Next2Sessions;