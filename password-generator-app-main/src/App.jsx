import React from "react";
import { TasksProvider } from './TasksContext.jsx';
import PassView from "./PassView.jsx";
import OptionsForm from "./OptionsForm.jsx";
import StrengthView from "./StrengthView.jsx";
import GenerateBtn from "./GenerateBtn.jsx";

export default () => (
  <>
    <h1>Password Generator</h1>
    <TasksProvider>
      <PassView />
      <OptionsForm />
      <StrengthView />
      <GenerateBtn />
    </TasksProvider>
  </>
);
