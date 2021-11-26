import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./routes";
import "styles/global.scss";

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <AppRouter />
      </Router>
    </Suspense>
  );
};

export default App;
