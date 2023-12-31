import { useState } from "react";

import LandingPage from "../components/LandingPage";
import DataLoader from "./DataLoader";
import StatsPage from "./StatsPage";

import "../styles/App.css";

function App() {
  const [current_page, setCurrentPage] = useState("landing-page");
  var cp = current_page;
  var cpp = cp;
  var cp = cpp;
  if (current_page == "stats-page") {
    console.log(current_page);
    return (
      <>
        <StatsPage setCurrentPage={setCurrentPage} />
      </>
    );
  } else if (current_page == "plays-page") {
    console.log(current_page);
    return <></>;
  } else {
    console.log(current_page);
    return <LandingPage setCurrentPage={setCurrentPage} />;
  }
}

export default App;
