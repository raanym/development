
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import ShowCase from './components/ShowCase';
import MainLink from "./components/UI/MainLink";
import NextSessions from './components/NextSessions';
import MassalaSurvey from './components/MassalaSurvey';
import Next2Sessions from './components/Next2Sessions'
import FormPanel from './components/FormPanel';
import Footer from './components/Footer'
import Form from './components/Forms/Form'
import './App.css';
import FormPage from "./pages/FormPage";
import GavaaidhuMain from "./components/Gavaaidhu/GavaaidhuMain";
import MainA from "./components/UI/MainA";

function App(props) {

  const sessions = [
    { name: 'ވިޝަނިން', date: new Date('July 18 2021 20:00'), zoom: 'https://us02web.zoom.us/j/89086461297?pwd=NnNvcFdoRXgwaGhvcVdMaHQwYnBndz09', fb: 'https://www.facebook.com/fvmcitycouncil/videos/2592004401094421/', ch: 'https://www.clubhouse.com/event/M435XRaa' },
    { name: 'ވިޔަފާަރި އަދި އާންމު އިޤްތިސާދޮ', date: new Date('July 21 2021 20:00'), fb: '', ch: 'https://www.clubhouse.com/event/Prn09WAW' },
    {
      name: 'ފަތުރުވެރިކަން', date: new Date('July 21 2021 21:45'), fb: '', ch: 'https://www.clubhouse.com/event/MzkAqEdb'
    },
    { name: 'މަސްވެރިކަން', date: new Date('July 22 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'ދަނޑޮވެރިކަން', date: new Date('July 22 2021 22:00'), zoom: '', fb: '', ch: '' },
    { name: 'ޞިއްހަތޮ', date: new Date('July 23 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'ތައޮލީމުއާ ހުނަރޮ', date: new Date('July 23 2021 22:00'), zoom: '', fb: '', ch: '' },
    { name: 'ޒުވާނުން / ކުޅިވަރޮ / އެންޖީއޯތެއް', date: new Date('July 24 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'ދީން / މުޖުތަމަޢޮ', date: new Date('July 24 2021 22:00'), zoom: '', fb: '', ch: '' },
    { name: 'ތިމާވެށި', date: new Date('July 25 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'ސްމާޓް ސިޓީ', date: new Date('July 25 2021 22:00'), zoom: '', fb: '', ch: '' },
    { name: 'ހިންގުންތެރި ކައުންސިލް', date: new Date('July 26 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'އާބަން ޕްލޭނިން / ދަތެރެފަތެރެ / އުމްރާނީ ތަރައްޤީ', date: new Date('July 26 2021 22:00'), zoom: '', fb: '', ch: '' },
    { name: 'ހައުސިން އެންޑް ލިވަބަލް ސިޓީ', date: new Date('July 27 2021 20:30'), zoom: '', fb: '', ch: '' },
    { name: 'ސަގާފަތާއި ތަރިކަ', date: new Date('July 27 2021 22:00'), zoom: '', fb: '', ch: '' }
  ]

  // Code for planning sessions
  // const UIChangeBack = () => {
  //   setUI(currentUI);
  // }

  // const UIChange = () => {
  //   setUI(<div>
  //     <Header />
  //     <ShowCase />
  //     <NextSessions click={UIChangeBack} sessions={sessions} />
  //     <MassalaSurvey />
  //     <FormPanel />
  //     <Footer />
  //   </div>)
  // }

  const currentUI = <React.Fragment>
    <Header />
    <ShowCase />
    {/* <Next2Sessions click={UIChange} sessions={sessions} /> */}
    <GavaaidhuMain />
    <div className='grid grid-cols-2 gap-2 sm:px-6 lg:px-52'>
      <MainA className='bg-yellow-400 hover:bg-yellow-500' href='https://google.com'>ތަރައްޤީއާ ކުރިއެރުމަހަ އާންމުކޮހޮ ހުށަހަޅާ ޚިޔާލަ އަދި ލަފާ</MainA>
      <MainLink className='bg-blue-300 hover:bg-blue-500' to='/area-development'>އިކި އިކި ސަރަހައްދުތެއް ތަރައްޤީކެރުމުގެ ޚިޔާލަ އަދި ކޮންސެޕްޓް</MainLink>
    </div>
    <Footer />
  </React.Fragment >;

  const [UI, setUI] = useState(currentUI);
  console.log(window.location.pathname)

  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          {UI}
        </Route>
        <Route path='/area-development' component={FormPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
