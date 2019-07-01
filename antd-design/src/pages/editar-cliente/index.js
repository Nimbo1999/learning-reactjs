import React from 'react'
import api from '../../services/api'
import './style.css'
import { Link, Redirect } from 'react-router-dom'
import { Button, Row, Form, Input, Col, notification, Icon } from 'antd';

class EditCliente extends React.Component {
    
    constructor(props){
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }

    state = {
        clientes: {},
        redirecionar:false,
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/clientes/${id}/`);

        this.setState({
            clientes: response.data,
            nome: response.data.nome,
            endereco: response.data.endereco,
            idade: response.data.idade
        })

        console.log(response)
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.putCliente()
        setTimeout(this.redirecionador, 2000)
    }

    putCliente = async () =>{
        try{
            const data = {
                nome: this.state.nome,
                endereco: this.state.endereco,
                idade: this.state.idade,
            }
            const response = await api.put(`/clientes/${this.state.clientes.id}/`, data)
            console.log('Returned data: ', response)
            notification.open({
                message: 'Sucesso',
                description: <p>Cliente Alterado com sucesso.</p>,
                duration: 3,
                icon: <Icon type="loading" />,
            })
        }catch(e){
            console.log("Falha na request: " + e)
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    redirecionador = () =>{
        this.setState({
            redirecionar: true,
        })
    }

    render(){
        const { clientes } = this.state

        if(this.state.redirecionar){
            return <Redirect to="/" />
        }
        return (
            <Row className="client-info">
                <span>
                    {clientes.imagem === null ? <></> : <img src={clientes.imagem} alt="Imagem do cliente" /> }
                </span>
                <Form onSubmit={this.submitHandler}>
                    <Form.Item label="Nome:">
                        <Input name="nome" value={this.state.nome} onChange={this.changeHandler} />
                    </Form.Item>
                    <Form.Item label="Endereço:">
                        <Input name="endereco" value={this.state.endereco} onChange={this.changeHandler} />
                    </Form.Item>
                    <Form.Item label="Idade:">
                        <Input name="idade" value={this.state.idade} type="number" onChange={this.changeHandler} />
                    </Form.Item>
                    <Col xs={24} sm={11}>
                        <Button type="primary" htmlType="submit" block>
                            Editar
                        </Button>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={24} sm={11}>
                        <Button type="danger" block>
                            <Link to={'/'}>Cancelar</Link>
                        </Button>
                    </Col>
                </Form>
            </Row>
        )

    }
}

export default EditCliente