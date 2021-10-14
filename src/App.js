
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from './components/Header';
import ShowCase from './components/ShowCase';
import Footer from './components/Footer'
import './App.css';
import FormPage from "./pages/FormPage";
import Feedback from "./components/Feedback/Feedback";
import EmbedForm from "./components/Forms/EmbedForm";

function App(props) {

  // const sessions = [
  //   { name: 'ވިޝަނިން', date: new Date('July 18 2021 20:00'), zoom: 'https://us02web.zoom.us/j/89086461297?pwd=NnNvcFdoRXgwaGhvcVdMaHQwYnBndz09', fb: 'https://www.facebook.com/fvmcitycouncil/videos/2592004401094421/', ch: 'https://www.clubhouse.com/event/M435XRaa' },
  //   { name: 'ވިޔަފާަރި އަދި އާންމު އިޤްތިސާދޮ', date: new Date('July 21 2021 20:00'), fb: '', ch: 'https://www.clubhouse.com/event/Prn09WAW' },
  //   {
  //     name: 'ފަތުރުވެރިކަން', date: new Date('July 21 2021 21:45'), fb: '', ch: 'https://www.clubhouse.com/event/MzkAqEdb'
  //   },
  //   { name: 'މަސްވެރިކަން', date: new Date('July 22 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'ދަނޑޮވެރިކަން', date: new Date('July 22 2021 22:00'), zoom: '', fb: '', ch: '' },
  //   { name: 'ޞިއްހަތޮ', date: new Date('July 23 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'ތައޮލީމުއާ ހުނަރޮ', date: new Date('July 23 2021 22:00'), zoom: '', fb: '', ch: '' },
  //   { name: 'ޒުވާނުން / ކުޅިވަރޮ / އެންޖީއޯތެއް', date: new Date('July 24 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'ދީން / މުޖުތަމަޢޮ', date: new Date('July 24 2021 22:00'), zoom: '', fb: '', ch: '' },
  //   { name: 'ތިމާވެށި', date: new Date('July 25 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'ސްމާޓް ސިޓީ', date: new Date('July 25 2021 22:00'), zoom: '', fb: '', ch: '' },
  //   { name: 'ހިންގުންތެރި ކައުންސިލް', date: new Date('July 26 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'އާބަން ޕްލޭނިން / ދަތެރެފަތެރެ / އުމްރާނީ ތަރައްޤީ', date: new Date('July 26 2021 22:00'), zoom: '', fb: '', ch: '' },
  //   { name: 'ހައުސިން އެންޑް ލިވަބަލް ސިޓީ', date: new Date('July 27 2021 20:30'), zoom: '', fb: '', ch: '' },
  //   { name: 'ސަގާފަތާއި ތަރިކަ', date: new Date('July 27 2021 22:00'), zoom: '', fb: '', ch: '' }
  // ]

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

  // const currentUI = <React.Fragment>
  //   <Header />
  //   <ShowCase />
  //   {/* <Next2Sessions click={UIChange} sessions={sessions} /> */}
  //   <Feedback />
  //   <Footer />
  // </React.Fragment >;

  const currentUI = <div className='bg-gray-100'>
    <Header />
    <ShowCase />
    <Feedback />
    <Footer />
  </div >;

  const routes =
    <React.Fragment>
      <Route path='/area-development' component={FormPage} />
      <Route path='/proposals-and-regulations-form'>
        <EmbedForm src='https://forms.office.com/Pages/ResponsePage.aspx?id=bh8sE-4Yyk2WXGiCYR05egGMLM-tDKxGtpZcj-zGW6tUNkNZWFQ5NTdBU0xWNDIwWEpIR1NNSk5MNC4u&embed=true' />
      </Route>
      <Route path='/general-feedback'>
        <EmbedForm src='https://forms.office.com/Pages/ResponsePage.aspx?id=bh8sE-4Yyk2WXGiCYR05egGMLM-tDKxGtpZcj-zGW6tUMDMxREgxM1JaUjFXRjZLT0ZFWVhHUjUySC4u&embed=true' />
      </Route>
    </React.Fragment>


  const [UI, setUI] = useState(currentUI);

  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          {UI}
        </Route>
        {routes}
      </Switch>
    </React.Fragment>
  );
}

export default App;
