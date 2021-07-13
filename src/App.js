
import React, { useEffect } from "react";

import Header from './components/Header';
import ShowCase from './components/ShowCase';
import NextSessions from './components/NextSessions';
import MassalaSurvey from './components/MassalaSurvey';
import Form from './components/Form';
import Footer from './components/Footer'
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Fuvahmulah Plan 2022-2026";
  }, []);

  return (
    <div>
      <Header />
      <ShowCase />
      <NextSessions />
      <MassalaSurvey />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
