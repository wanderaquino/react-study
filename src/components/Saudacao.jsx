import React, {Component} from "react";

export default class Saudacao extends Component {
    constructor(props) {
        super(props);
        
        //Se não fizer esse bind, o this, não resolve para a instancia do componente.
        this.setTipo = this.setTipo.bind(this);
        this.setTipo = this.setNome.bind(this);
    }
    //Declarando o state
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    setTipo(e) {
        //Alterando o state para alterar o input
        this.setState({tipo: e.target.value});
    }
    setNome(e) {
        //Alterando o state para alterar o input
        this.setState({tipo: e.target.value});
    }
    render () {
        const {tipo, nome} = this.state;
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <br/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}></input>
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}></input>
            </div>
        )
    }
}