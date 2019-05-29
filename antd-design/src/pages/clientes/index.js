import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'
import { Link } from 'react-router-dom'
import { Button,  Row, Col } from 'antd';


class Cliente extends Component{

    state = {
        clientes: {},
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/clientes/${id}/`);

        this.setState({
            clientes: response.data
        })
    }

    render(){
        const { clientes } = this.state

        return (
            <Row className="client-info">
                <h1>Nome: {clientes.nome}</h1>
                <p>Endereço: {clientes.endereco}</p>
                <p>Idade: {clientes.idade}</p>
                <Button type="primary" block>
                    <Link to={'/'}>Voltar</Link>
                </Button>
            </Row>
        )
    }
}

export default Cliente
