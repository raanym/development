import React from "react";
import FormPanel from "../components/FormPanel";
import Header from "../components/Header";
import ShowCase from "../components/ShowCase";
import Footer from "../components/Footer";


const FormPage = () => {

  return (
    <React.Fragment>
      <Header />
      <ShowCase />
      <FormPanel />
      <Footer />
    </React.Fragment>
  )
}

export default FormPage;