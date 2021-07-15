
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
