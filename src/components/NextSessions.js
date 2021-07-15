import { ReactComponent as DateIcon } from '../img/dateIcon.svg';
import { ReactComponent as Clock } from '../img/clock.svg';
import { ReactComponent as Zoom } from '../img/zoom.svg';
import { ReactComponent as FB } from '../img/fb-meet.svg';
import { ReactComponent as ClubHouse } from '../img/Clubhouse.svg';

const NextSessions = (props) => {

  const findMonth = (date) => {

    const months = ['ޖަނަވަރީ', 'ފެބުރުއަރީ', 'މާރިޗް', 'އެޕްރީލް', 'މެއި', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓް', 'ސެޕްޓެމްބަރ', 'ނޮވެމްބަރ', 'ޑިސެމްބަރ']

    return months[date];
  }

  const buttonHandler = () => {
    props.click();
  }

  return (
    <div className='lg:px-40 sm:px-4 px-4 font-faseyha bg-customGreen h-auto'>
      <div className='p-6 mt-6'>
        <h2 className='font-waheed text-2xl sm:text-3xl'>ކުރިހާތީ އަދި ނިމީވޭފޭވޭ ސެޝަންތެއް</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8 sm:gap-4 sm:gap-x-2 md:gap-x-4 lg:gap-x-10 md:gap-4 p-2 mt-2'>
          {props.sessions.map(session => {
            return <div key={session.name} className='font-bold text-lg'>
              <h3 className='bg-customGreenLight rounded py-2 px-2 mb-2'>{session.name}</h3>
              <div className=''>
                <DateIcon className=' h-8 w-auto inline' />
                <p className='px-2 inline'>{`${session.date.getDate()} ${findMonth(session.date.getMonth())} ${session.date.getFullYear()}`}</p>
              </div>
              <div className='mt-2'>
                <Clock className='w-auto inline' style={{ height: '2.2rem' }} />
                <p className='inline px-2'>{`${session.date.getHours()}:${session.date.getSeconds()}0`}</p>
              </div>
              <div className='mt-2 border-t border-customGreenLight'>
                {(session.zoom === '')
                  ? <Zoom className='h-10 w-auto inline ml-2 mt-2  opacity-50' />
                  : <a href={session.zoom}><Zoom className='h-10 w-auto inline ml-2 mt-2' /></a>}

                {(session.fb === '')
                  ? <FB className='h-8 w-auto inline ml-2 mt-2 opacity-50' />
                  : <a href={session.fb}><Zoom className='h-10 w-auto inline ml-2 mt-2' /></a>}

                {(session.ch === '')
                  ? <ClubHouse style={{ 'height': '2.3rem' }} className='h-10 w-auto inline ml-2 mt-2 opacity-50' />
                  : <a href={session.link}><ClubHouse style={{ 'height': '2.3rem' }} className='h-10 w-auto inline ml-2 mt-2' /></a>}
              </div>
            </div>
          })}
        </div>
        <button className='bg-customGreenLight hover:bg-green-500 px-4 py-2 rounded' onClick={buttonHandler}>ކުރިއެ ސަފުހާ</button>
      </div>
    </div >
  )
}

export default NextSessions;