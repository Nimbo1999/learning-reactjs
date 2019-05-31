import React, { Component } from 'react'
import api  from '../../services/api'
import './style.css'
import { Form, Input, Col, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class CadastrarCliente extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: '',
            endereco: '',
            idade: null,
            imagem: null
        }
    }

    // Envia meu post para api
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.postCliente()
    }

    postCliente = async () =>{
        try{
            const data = this.state
            const response = await api.post('/clientes/', data)
            console.log('Returned data: ', response)
        }catch(e){
            console.log("Falha na request: " + e)
        }
    }

    changeHandler = (e) => {

        this.setState({[e.target.name]: e.target.value})

    }

    fileSelectHandles = event =>{
        console.log(event.target.files[0]);
    }

    render(){

        const { nome, endereco, idade } = this.state

        return (
            <Col span={12} offset={6}>

                <h1>Cadastro de Clientes</h1>

                <Form id="cadastro-form" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onSubmit={this.submitHandler}>
                    
                    <Form.Item label="Nome:">
                        <Input name="nome" value={nome} onChange={this.changeHandler} />
                    </Form.Item>
                    <Form.Item label="Endereço:">
                        <Input name="endereco" value={endereco} onChange={this.changeHandler} />
                    </Form.Item>
                    <Form.Item label="Idade:">
                        <Input name="idade" value={idade} onChange={this.changeHandler} />
                    </Form.Item>
                    
                    <input type="file" name="imagem" onChange={this.fileSelectHandles} hidden />
                     
                    <FormItem>
                        <Button className="button-submit" type="primary" htmlType="submit">
                            Cadastrar
                        </Button>
                    </FormItem>

                </Form>

            </Col>
        )
    }

}

export default CadastrarCliente