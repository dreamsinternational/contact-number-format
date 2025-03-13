import React from "react";
import { useState } from "react";
import PhoneInputWrapper from "./component/PhoneInputWrapper";
import { PhoneInputComponent } from "phoneinputomcustom";

function App() {
  const [phoneValues, setPhoneValues] = useState({
    number: "",
    countryCode: "91",
    tempCountryCode: "91",
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneValues, error);
    if (!phoneValues.number) return setError("Please enter phone number");
  };

  return (
    <div
      style={{
        width: 300,
      }}
      className=""
    >
      <PhoneInputComponent phoneValues={phoneValues} />
    </div>
  );
}

export default App;
