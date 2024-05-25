import React, { useEffect, useRef, useState } from "react";
import Chat from "./components/Chat";
import Final from "./components/Final";
import Home from "./components/Home";
import "./App.css";
import { SectionsContainer, Section } from "react-fullpage";

let options = {
  anchors: ["Home", "Chat"],
  delay: 1000,
  scrollBar: false,
  navigation: false,
  verticalAlign: false,
};

function App() {
  return (
    <div className="App">
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <Chat />
        </Section>
        {/* <Section>
          <Final />
        </Section> */}
      </SectionsContainer>
    </div>
  );
}

export default App;
