import React from "react";
import ReactDOM from "react-dom";
import First from "./components/First";
import BomDia from "./components/BomDia";
import {BoaTarde, BoaNoite} from "./components/Multiplos";
import Saudacao from "./components/Saudacao"

//renderizar o primeiro elemento na página
ReactDOM.render(
    <div>
        {/* <First/>
        <BomDia nome="Charles"/>
        <BoaTarde nome="Bia"/>
        <BoaNoite nome="Joelma"/> */}
        <Saudacao tipo="Bom dia!" nome="João"/>
    </div>, 
document.getElementById("root"));

