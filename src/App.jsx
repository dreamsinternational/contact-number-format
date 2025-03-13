import React from "react";
import { useState } from "react";
import PhoneInputWrapper from "./component/PhoneInputWrapper";

function App() {
  const [phoneValues, setPhoneValues] = useState({
    number: "",
    countryCode: "91",
    tempCountryCode: "91",
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneValues.number) return setError("Please enter phone number");
  };

  return (
    <div
      style={{
        width: 300,
      }}
      className=""
    >
      <PhoneInputWrapper
        phoneValues={phoneValues}
        PreferredCountryCodes={["91", "971"]}
        handlePhoneChange={(e) => {
          console.log(e);
          setPhoneValues(e);
        }}
        error={error}
        defaultCountryCode="91"
        setError={setError}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}{" "}
    </div>
  );
}

export default App;
