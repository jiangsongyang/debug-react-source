import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("创建 fiberRootNode 结束 : ", root);
root.render(<App />);
