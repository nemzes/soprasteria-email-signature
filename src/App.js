/* global ClipboardItem */

import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import Signature from "./signature";
import SignatureForm from "./signature-form";
import "./App.css";

const defaultSignature = {
  firstName: "Nelson",
  surname: "Menezes",
  title: "Senior Consultant",
  address1: "Jåttåflaten 27",
  address2: "",
  address3: "",
  postcode: "4020",
  city: "Stavanger",
  phoneCode: "47",
  phoneNumber: "22 57 56 00",
  mobileCode: "47",
  mobileNumber: "966 266 82",
  email: "nelson.menezes@soprasteria.com",
  url: "www.soprasteria.no",
};

function App() {
  const [sig, updateSig] = useState(defaultSignature);
  const handleChange = (ev) => updateSig({ ...sig, [ev.key]: ev.value });
  let source = renderToString(<Signature data={sig} />);

  source = source.replace(/data-reactroot=""|<!-- -->/g, "");

  return (
    <div className="App">
      <SignatureForm onChange={handleChange} data={sig} />
      <div className="light" dangerouslySetInnerHTML={{ __html: source }}></div>
      <div className="dark" dangerouslySetInnerHTML={{ __html: source }}></div>
      <div className="neutral" dangerouslySetInnerHTML={{ __html: source }}></div>
      <div>
        <textarea readOnly value={source} />
      </div>
    </div>
  );
}

export default App;
