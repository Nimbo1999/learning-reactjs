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
        redirecionar:false,
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/api/clientes/${id}/`);

        this.setState({
            nome: response.data.nome,
            endereco: response.data.endereco,
            imagem: response.data.imagem,
            id: response.data.id,
            idade: response.data.idade
        })

    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.putCliente()
        setTimeout(this.redirecionador, 2000)
    }

    putCliente = async () =>{
        try{
            let data = new FormData();
            data.append('nome', this.state.nome)
            data.append('endereco', this.state.endereco)
            data.append('idade', this.state.idade)
            
            const response = await api.put(`/api/clientes/${this.state.id}/`, data, {headers:{'content-type': 'multipart/form-data'}})
            console.log('Returned data: ', response)
            notification.open({
                message: 'Sucesso',
                description: <p>Cliente Alterado com sucesso.</p>,
                duration: 3,
                icon: <Icon type="check" />,
            })
        }catch(e){
            console.log("Falha na request: " + e)
        }
    }

    changeHandler = (value) => {
        this.setState({
            [value.currentTarget.name]: value.currentTarget.value
        })
    }

    redirecionador = () =>{
        this.setState({
            redirecionar: true,
        })
    }

    render(){
        const userDefault = "http://localhost:8000/media/clientes/user.jpg";
        const baseurl = "http://localhost:8000";

        if(this.state.redirecionar === true){
            return <Redirect to="/" />
        }
        return (
            <Row className="client-info">
                <span>
                    {this.state.imagem === null ? <img src={userDefault} alt="Imagem do cliente" /> : <img src={baseurl + this.state.imagem} alt="Imagem do cliente" /> }
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