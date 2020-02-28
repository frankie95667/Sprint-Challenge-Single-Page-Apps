import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
      
    </main>
  );
}
