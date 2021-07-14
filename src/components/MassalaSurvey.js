import { ReactComponent as Survey } from '../img/survey.svg';
import { ReactComponent as Complaint } from '../img/complaint.svg';

const MassalaSurvey = () => {


  return (
    <div className='sm:px-52 px-4 font-waheed text-3xl mt-6'>
      <div className='sm:grid sm:grid-cols-1 sm:items-center sm:gap-2'>
        <a href='https://forms.gle/jKoMokA8MEfnAVDU8' target='_blank' className='flex items-center bg-customYellow md:h-40 md:text-4xl md:leading-relaxed mb-2 sm:mb-0 hover:bg-yellow-500 transition'>
          <Complaint className='w-24 ml-2' /> ތަރައްޤީއާ ކުރިއެރުމަހަ އާންމުކޮހޮ ހުށަހަޅާ ޚިޔާލަ އަދި ލަފާ
        </a>
      </div>

    </div >
  );
}

export default MassalaSurvey;