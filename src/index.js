import React from "react";
import ReactDOM from "react-dom";
import First from "./components/First";
import BomDia from "./components/BomDia"

//renderizar o primeiro elemento na página
ReactDOM.render(<First/>, document.getElementById("root"));
ReactDOM.render(<BomDia nome ="Charles"/>, document.getElementById("root"));

