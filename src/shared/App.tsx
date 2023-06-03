import React from "react";
import { BurgerImg } from "./images/BurgerImg";
import { Header } from "./components/Header";

function AppComponent() {
  return (
    <div>
      <Header />
    </div>
  );
}

const App = () => <AppComponent />;

export default App;
