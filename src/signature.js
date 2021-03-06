import React from "react";
// import logo from "./logo.png";

const NO_BREAK_SPACE = " "; // NO-BREAK SPACE; Unicode: U+00A0, UTF-8: C2 A0
const logo = 'https://nemzes.net/logo-small-2x.png';

const Signature = ({ data }) => {
  const sig = {};

  for (const key of Object.keys(data)) {
    sig[key] = data[key].replace(/ /g, NO_BREAK_SPACE).trim();
  }

  return (
    <div
      style={{
        fontFamily: "Helvetica,Arial,sans-serif",
        margin: 0,
        padding: 0,
        lineHeight: 1.4,
        fontSize: "13px",
      }}
      className="vcard"
      lang="en"
    >
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <style type="text/css">{`
      :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
      }
      `}
      </style>
      <br />
      <br />
      <div style={{ fontWeight: "bold" }}>
        <span className="fn">
          <span>{sig.firstName}</span>&nbsp;
          <span style={{ textTransform: "uppercase" }}>{sig.surname}</span>
        </span>
      </div>
      <div className="title">{sig.title}</div>
      <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        <picture>
          <source srcset="data:image/png;base64,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" />
          <img class="logo" alt="Logo" src="https://nemzes.net/logo-small-2x.png" width="210" height="29" />
        </picture>
      </div>
      <div className="adr" style={{ color: "#808080", fontSize: "11px" }}>
        <span className="street-address">
          Sopra&nbsp;Steria, {sig.address1}
          {sig.address2 && `, ${sig.address2}`}
          {sig.address3 && `, ${sig.address3}`}
        </span>
        {", "}
        <span className="postal-code">N&#x2011;{sig.postcode}</span>&nbsp;
        <span className="locality">{sig.city}</span>
      </div>
      <div style={{ color: "#808080", fontSize: "11px" }}>
        <span className="tel">
          <abbr
            className="type"
            title="Work"
            style={{ textDecoration: "none" }}
          >
            Phone
          </abbr>
          :&nbsp;
          <span className="value">
            +{sig.phoneCode}&nbsp;{sig.phoneNumber}
          </span>
        </span>
        &nbsp;–&#x02060;{" "}
        <span className="tel">
          <abbr
            className="type"
            title="Cell"
            style={{ textDecoration: "none" }}
          >
            Mobile
          </abbr>
          :&nbsp;
          <span className="value">
            +{sig.mobileCode}&nbsp;{sig.mobileNumber}
          </span>
        </span>
      </div>
      <div style={{ color: "#808080", fontSize: "11px" }}>
        <a
          className="email"
          href={`mailto:${sig.email}`}
          style={{
            color: ["#808080 !important"],
            textDecoration: "none",
            borderBottom: "1px solid currentColor",
          }}
        >
          <span style={{ color: ["#808080 !important"] }}>{sig.email}</span>
        </a>
        &nbsp;–&#x02060;{" "}
        <a
          className="url"
          href={`https://${sig.url}`}
          style={{
            color: ["#808080 !important"],
            textDecoration: "none",
            borderBottom: "1px solid currentColor",
          }}
        >
          <span style={{ color: ["#808080 !important"] }}>{sig.url}</span>
        </a>
      </div>
    </div>
  );
};

export default Signature;
