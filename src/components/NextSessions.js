import { ReactComponent as DateIcon } from '../img/dateIcon.svg';

const NextSessions = (props) => {

  const sessions = [
    { name: 'ވިޔަފާރި', date: new Date('July 12 2021 10:00'), area: 'ނޫ އިޤްތިޞާދު' },
    { name: 'މަސްވެރިކަން', date: new Date('July 12 2021 20:30'), area: 'ނޫ އިޤްތިޞާދު' },
    { name: 'ފަތުރުވެރިކަން', date: new Date('July 13 20 21 10:00'), area: 'ނޫ އިޤްތިޞާދު' },
    { name: 'ދަނޑުވެރިކަން', date: new Date('July 13 2021 20:30'), area: 'ނޫ އިޤްތިޞާދު' },
    { name: 'ޞިއްހަތު', date: new Date('July 14 2021 11:00'), area: 'އޯގާތެރި ސަރުކާރު' },
    { name: 'ތަޢުލީމު', date: new Date('July 14 2021 14:00'), area: 'އޯގާތެރި ސަރުކާރު' },
    { name: 'ޒުވާނުން', date: new Date('July 15 2021 10:00'), area: 'ފަޙުރުވެރި ޢާއިލާ' },
    { name: 'ކުޅިވަރު', date: new Date('July 15 2021 14:00'), area: 'ފަޙުރުވެރި ޢާއިލާ' },
    { name: 'ޖައްމިއްޔާ ޖަމާއައްތައް', date: new Date('July 16 2021 10:00'), area: 'ފަޙުރުވެރި ޢާއިލާ' },
    { name: 'ދީން', date: new Date('July 16 2021 14:00'), area: 'ފަޙުރުވެރި ޢާއިލާ' },
  ]

  const today = new Date();

  const filteredSessions = sessions.filter((session, i) => {
    if (session.date.getDate() >= today.getDate() && i <= 4) {
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
        <h2 className='font-waheed text-xl sm:text-3xl'>ކުރިއަށް ހުރި ސެޝަންތައް</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4 sm:gap-0  py-2'>
          {filteredSessions.map(session => {
            return <div key={session.name} className='m-2'>
              <p className='bg-yellow-400 py-1 px-2'>{session.name} <span className='text-gray-800'>({session.area})</span></p>
              <p><DateIcon className='h-6 inline' /> {`${session.date.getDate()} ${dateTime(session.date.getMonth())} ${session.date.getFullYear()}`}</p>
              <p>{`${session.date.getHours()}:${session.date.getSeconds()}0`}</p>
            </div>
          })}
        </div>
      </div>
    </div >
  )
}

export default NextSessions;