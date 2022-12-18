import React, { useState } from "react";
import { TasksProvider } from './TasksContext.jsx';
import PassView from "./PassView.jsx";
import OptionsForm from "./OptionsForm.jsx";
import StrengthView from "./StrengthView.jsx";
import GenerateBtn from "./GenerateBtn.jsx";

export default () => {
  const [password, setPassword] = useState(false);

  return (<>
    <h1>Password Generator</h1>
    <TasksProvider>
      <PassView password={password} />
      <OptionsForm />
      <StrengthView />
      <GenerateBtn setPassword={setPassword} />
    </TasksProvider>
  </>
  )
};
