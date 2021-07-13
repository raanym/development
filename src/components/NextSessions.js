import { ReactComponent as DateIcon } from '../img/dateIcon.svg';
import { ReactComponent as Clock } from '../img/clock.svg';
import { ReactComponent as Zoom } from '../img/zoom.svg';

const NextSessions = (props) => {

  const sessions = [
    { name: 'ވިޔަފާރި', date: new Date('July 12 2021 10:00'), area: 'ނޫ އިޤްތިޞާދު', link: '' },
    { name: 'މަސްވެރިކަން', date: new Date('July 12 2021 20:30'), area: 'ނޫ އިޤްތިޞާދު', link: '' },
    { name: 'ފަތުރުވެރިކަން', date: new Date('July 13 20 21 10:00'), area: 'ނޫ އިޤްތިޞާދު', link: 'text' },
    { name: 'ދަނޑޮވެރިކަން', date: new Date('July 13 2021 20:30'), area: 'ނޫ އިޤްތިޞާދު', link: '' },
    { name: 'ޞިއްހަތޮ', date: new Date('July 14 2021 11:00'), area: 'އޯގާތެރި ސަރުކާރު', link: '' },
    { name: 'ތަޢުލީމު', date: new Date('July 14 2021 14:00'), area: 'އޯގާތެރި ސަރުކާރު', link: '' },
    { name: 'ޒުވާނުން', date: new Date('July 15 2021 10:00'), area: 'ފަޙުރުވެރި ޢާއިލާ', link: '' },
    { name: 'ކުޅިވަރޮ', date: new Date('July 15 2021 14:00'), area: 'ފަޙުރުވެރި ޢާއިލާ', link: '' },
    { name: 'ޖައްމިއްޔާ ޖަމާއައްތެއް', date: new Date('July 16 2021 10:00'), area: 'ފަޙުރުވެރި ޢާއިލާ', link: '' },
    { name: 'ދީން', date: new Date('July 16 2021 14:00'), area: 'ފަޙުރުވެރި ޢާއިލާ', link: '' },
  ]

  const today = new Date();

  const filteredSessions = sessions.filter((session, i) => {
    if (session.date.getDate() >= today.getDate() && session.date.getDate() <= today.getDate() + 2) {
      return session;
    }
  });

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

  return (
    <div className='sm:px-52 px-4 font-faseyha bg-yellow-100'>
      <div className='p-6 text-line mt-4'>
        <h2 className='font-waheed text-xl sm:text-3xl'>ކުރިހާ ތީ ސެޝަންތެއް</h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-4 sm:gap-4 p-2 mt-2'>
          {filteredSessions.map(session => {
            return <div key={session.name} className='font-bold'>
              <h3 className='bg-yellow-400 py-1 px-2 mb-1'>{session.name}</h3>
              <div>
                <DateIcon className='mb-1 h-4 w-6 inline' />
                <p className='px-2 inline'>{`${session.date.getDate()} ${dateTime(session.date.getMonth())} ${session.date.getFullYear()}`}</p>
              </div>
              <div>
                <Clock className='h-6 w-auto inline' />
                <p className='inline px-2'>{`${session.date.getHours()}:${session.date.getSeconds()}0`}</p>
              </div>
              <div>
                <Zoom className='h-6 w-auto inline ml-2' />
                <a href={session.link} className='px-1text-gray-800 hover:text-yellow-500'>
                  ޒޫމް ލިންކް</a>
              </div>
            </div>
          })}
        </div>
      </div>
    </div >
  )
}

export default NextSessions;