
import React, { useEffect, useState } from "react";

import Header from './components/Header';
import ShowCase from './components/ShowCase';
import NextSessions from './components/NextSessions';
import MassalaSurvey from './components/MassalaSurvey';
import Next2Sessions from './components/Next2Sessions'
import Form from './components/Form';
import Footer from './components/Footer'
import './App.css';

function App() {

  const sessions = [
    { name: 'ވިޝަނިން', date: new Date('July 18 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ވިޔަފާަރި އަދި އާންމު އިޤްތިސާދު', date: new Date('July 21 2021 20:00'), zoom: '', fb: '', ch: '' },
    {
      name: 'ފަތުރުވެރިކަން', date: new Date('July 21 2021 21:45'), zoom: '', fb: '', ch: ''
    },
    { name: 'މަސްވެރިކަން', date: new Date('July 22 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ދަނޑޮވެރިކަން', date: new Date('July 22 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ޞިއްހަތޮ', date: new Date('July 23 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ތަޢުލީމު', date: new Date('July 23 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ޒުވާނުން / ކުޅިވަރޮ / އެންޖީއޯތެއް', date: new Date('July 24 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ދީނާއި މުޖުތަމަޢު', date: new Date('July 24 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ތިމާވެށި', date: new Date('July 25 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'ސްމާޓް ސިޓީ', date: new Date('July 25 2021 21:45'), zoom: '', fb: '', ch: '' },
    { name: 'ހިންގުންތެރި ކައުންސިލް', date: new Date('July 26 2021 20:00'), zoom: '', fb: '', ch: '' },
    { name: 'އާބަން ޕްލޭނިން / ދަތުރުފަތުރު / އުމްރާނީ ތަރައްޤީ', date: new Date('July 26 2021 21:45'), zoom: '', fb: '', ch: '' },
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
      <Footer />
    </div>)
  }

  const currentUI = <div>
    <Header />
    <ShowCase />
    <Next2Sessions click={UIChange} sessions={sessions} />
    <MassalaSurvey />
    <Form />
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
