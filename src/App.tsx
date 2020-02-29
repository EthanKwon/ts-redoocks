import React from "react";

import Lang from "./context";
import translations from "./translation";
import Screen from "./Screen";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
