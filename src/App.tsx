/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "./App.css";

import { HomePage } from "./pages/HomePage/loadable";
import { CountPage } from "./pages/CountPage/loadable";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/count" component={CountPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
