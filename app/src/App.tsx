import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRouter } from "routes";

import { GlobalStyle } from "./styles/global";

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <GlobalStyle />
        <AppRouter />
      </Router>
    </Suspense>
  );
};

export default App;
