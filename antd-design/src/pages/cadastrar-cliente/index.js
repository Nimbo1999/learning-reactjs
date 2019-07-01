import React, { Component } from 'react'
import api  from '../../services/api'
import './style.css'
import { Link, Redirect } from 'react-router-dom'
import { Form, Input, Col, Row, Button, notification, Icon } from 'antd';
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
        setTimeout(this.redirecionador, 2000)
    }

    postCliente = async () =>{
        try{
            const data = this.state
            const response = await api.post('/clientes/', data)
            console.log('Returned data: ', response)
            notification.open({
                message: 'Sucesso',
                description: 'Cliente cadastrado com sucesso.',
                duration: 3,
                icon: <Icon type="check" />,
            })
        }catch(e){
            console.log("Falha na request: " + e)
        }
    }

    redirecionador = () =>{
        this.setState({
            redirecionar: true,
        })
    }

    changeHandler = (e) => {

        this.setState({[e.target.name]: e.target.value})

    }

    fileSelectHandles = event =>{
        console.log(event.target.files[0]);
    }

    render(){

        const { nome, endereco, idade } = this.state

        if(this.state.redirecionar){
            return <Redirect to="/" />
        }
        return (
            <Col className="cadastro-de-clientes">

                <h1>Cadastro de Clientes</h1>

                <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onSubmit={this.submitHandler}>
                    
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
                     
                     <Row gutter={34} style={{padding: '0px 20px'}}>
                        <Col xs={12}>
                            <FormItem>
                                <Button className="button-submit" style={{width: '100%'}} type="primary" htmlType="submit">
                                    Cadastrar
                                </Button>
                            </FormItem>
                        </Col>

                        <Col xs={12}>
                            <FormItem>
                                <Button className="button-submit" style={{width: '100%'}}>
                                    <Link to={`/`}>Voltar</Link>
                                </Button>
                            </FormItem>
                        </Col>
                    </Row>

                </Form>

            </Col>
        )
    }

}

export default CadastrarCliente