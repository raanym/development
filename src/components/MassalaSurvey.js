import { ReactComponent as Survey } from '../img/survey.svg';
import { ReactComponent as Complaint } from '../img/complaint.svg';

const MassalaSurvey = () => {


  return (
    <div className='sm:px-6 lg:px-52 px-4 font-waheed text-xl py-4'>
      <div className='md:flex md:justify-end'>
        <a href='https://forms.gle/jKoMokA8MEfnAVDU8' target='_blank' style={{ width: '40%' }} className='flex items-center justify-items-center bg-customYellow md:text-xl md:leading-relaxed mb-0 sm:mb-0 rounded hover:bg-yellow-500 transition'>
          <Complaint className='h-20' /> ތަރައްޤީއާ ކުރިއެރުމަހަ އާންމުކޮހޮ ހުށަހަޅާ ޚިޔާލަ އަދި ލަފާ
        </a>
      </div>
    </div >
  );
}

export default MassalaSurvey;