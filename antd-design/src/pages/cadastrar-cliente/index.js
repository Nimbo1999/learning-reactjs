import React, { Component } from 'react'
import api  from '../../services/api'
import './style.css'
import Axios from 'axios';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class CadastrarCliente extends Component {

    state = {
        clientes: []
    }

    componentDidMount(){
        this.loadClients();
    }

    loadClients = async () => {
        const response = await api.get("/clientes/")
        
        this.setState({
            clientes: response.data
        })
    }

    insertClients = (Nome, Endereco, Idade) => {
        Axios.post("/clientes/", {
            nome: Nome,
            endereco: Endereco,
            idade: Idade
        })
    }

    render(){
        const { clientes } = this.state.clientes;

        return (
            <Form className="client-form">

                <Form.Item>
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Nome"
                    />
                </Form.Item>
                
            </Form>
        )
    }

}

export default CadastrarCliente