import * as React from "react";
import { FunctinComponent, ClassComponent } from "./study/01_mount/Mount";

const App = () => {
  const [text, setText] = React.useState("host text");

  React.useEffect(() => {
    setTimeout(() => {
      // setText("host text 2");
    }, 1000);
  }, []);

  return (
    <>
      {text}
      {/* <span onClick={() => setText("zxc")}>{text}</span> */}
      {/* <div>host component</div> */}
      {/* <FunctinComponent / */}
      {/* <ClassComponent /> */}
    </>
  );
};

export default App;
