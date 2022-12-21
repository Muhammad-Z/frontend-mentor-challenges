import React, { useState } from "react";
import { TasksProvider } from '../../src//TasksContext.jsx';
import PassView from "../../src/PassView.jsx";
import OptionsForm from "../../src/OptionsForm.jsx";
import StrengthView from "../../src/StrengthView.jsx";
import GenerateBtn from "../../src/GenerateBtn.jsx";

export default () => {
  const [password, setPassword] = useState(false);

  return (<main>
    <h1>Password Generator</h1>
    <TasksProvider>
      <PassView password={password} />
      <OptionsForm />
      <StrengthView />
      <GenerateBtn setPassword={setPassword} />
    </TasksProvider>
  </main>
  )
};
