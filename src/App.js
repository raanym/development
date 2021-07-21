
import React, { useEffect, useState } from "react";

import Header from './components/Header';
import ShowCase from './components/ShowCase';
import NextSessions from './components/NextSessions';
import MassalaSurvey from './components/MassalaSurvey';
import Next2Sessions from './components/Next2Sessions'
import FormPanel from './components/FormPanel';
import Footer from './components/Footer'
import Form from './components/Forms/Form'
import './App.css';

function App() {

  const sessions = [
    { name: 'ވިޝަނިން', date: new Date('July 18 2021 20:00'), zoom: 'https://us02web.zoom.us/j/89086461297?pwd=NnNvcFdoRXgwaGhvcVdMaHQwYnBndz09', fb: 'https://www.facebook.com/fvmcitycouncil/videos/2592004401094421/', ch: 'https://www.clubhouse.com/event/M435XRaa' },
    { name: 'ވިޔަފާަރި އަދި އާންމު އިޤްތިސާދޮ', date: new Date('July 21 2021 20:00'), fb: '', ch: 'https://www.clubhouse.com/event/Prn09WAW' },
    {
      name: 'ފަތުރުވެރިކަން', date: new Date('July 21 2021 21:45'), fb: '', ch: 'https://www.clubhouse.com/event/MzkAqEdb'
    },
    { name: 'މަސްވެރިކަން', date: new Date('July 22 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ދަނޑޮވެރިކަން', date: new Date('July 22 2021 21:45:00'), zoom: '', fb: '', ch: '' },
    { name: 'ޞިއްހަތޮ', date: new Date('July 23 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ތައޮލީމުއާ ހުނަރޮ', date: new Date('July 23 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ޒުވާނުން / ކުޅިވަރޮ / އެންޖީއޯތެއް', date: new Date('July 24 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ދީން މުޖުތަމަޢޮ', date: new Date('July 24 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ތިމާވެށި', date: new Date('July 25 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ސްމާޓް ސިޓީ', date: new Date('July 25 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ހިންގުންތެރި ކައުންސިލް', date: new Date('July 26 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'އާބަން ޕްލޭނިން / ދަތެރެފަތެރެ / އުމްރާނީ ތަރައްޤީ', date: new Date('July 26 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ހައުސިން އެންޑް ލިވަބަލް ސިޓީ', date: new Date('July 27 2021 20:00'), zoom: '', fb: '', ch: '' },
  ]


  const UIChangeBack = () => {
    setUI(currentUI);
  }

  const UIChange = () => {
    setUI(<div>
      <Header />
      <ShowCase />
      <NextSessions click={UIChangeBack} sessions={sessions} />
      <MassalaSurvey />
      <FormPanel />
      <Footer />
    </div>)
  }

  const currentUI = <div>
    <Header />
    <ShowCase />
    <Next2Sessions click={UIChange} sessions={sessions} />
    <MassalaSurvey />
    <FormPanel />
    <Footer />
  </div>;

  const [UI, setUI] = useState(currentUI);






  return (
    <div>
      {UI}
    </div>
  );
}

export default App;
