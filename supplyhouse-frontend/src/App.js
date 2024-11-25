import React from "react";
import RegularHours from "./components/RegularHours";
import SpecialHours from "./components/SpecialHours";
import AddSpecialHours from "./components/AddSpecialHours";

import SupportInfo from "./components/SupportInfo.jsx";

const App = () => {
  return (
    <div className="max-w-md mx-auto">
      
       <SupportInfo />
      {/* <RegularHours />
      <SpecialHours />
      <AddSpecialHours /> */}
    </div>
  );
};

export default App;
