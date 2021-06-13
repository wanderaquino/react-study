import React from "react";

 const Pai = props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}></Filho>
            <Filho {...props}></Filho>
            <Filho {...props} nome="Carla"></Filho>
            <Filho nome="Carlota" {...props}></Filho> */}
            {React.cloneElement(props.children, {...props, ...props.children.props})}
        </ul>
    </div>

export default Pai;