import * as React from "react";
import { FunctinComponent, ClassComponent } from "./study/01_mount/Mount";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      {count}
      <div>host component</div>
      {/* <FunctinComponent /> */}
      {/* <ClassComponent /> */}
    </>
  );
};

export default App;
