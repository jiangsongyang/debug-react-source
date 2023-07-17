import * as React from "react";
import { FunctinComponent, ClassComponent } from "./study/01_mount/Mount";

const App = () => {
  const [text] = React.useState("host text");

  return (
    <>
      {text}
      <div>host component</div>
      <FunctinComponent />
      {/* <ClassComponent /> */}
    </>
  );
};

export default App;
