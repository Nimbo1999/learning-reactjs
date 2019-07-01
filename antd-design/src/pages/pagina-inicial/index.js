import React from 'react';
import './style.css';
import { Menu, Icon, Col, Row, Layout, Breadcrumb, Table, Button, notification } from 'antd';
import { Link } from 'react-router-dom'
import api from '../../services/api'


class PaginaInicial extends React.Component{

    state = {
        collapsed: true,
        clientes: [],
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

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){

        const { Content, Sider } = Layout;

        const columns = [
            {
                title: 'Primeiro Nome',
                dataIndex: 'nome',
                key: 'firstName',
                width: 10
                
            },
            {
                title: 'Endereço',
                dataIndex: 'endereco',
                key: 'endereco',
                width: 10
            },
            {
                title: 'Idade',
                dataIndex: 'idade',
                key: 'idade',
                width: 10
            },
            {
                title: 'Opções',
                dataIndex: 'id',
                render: (id) => {
                    const userid = id
                    return (
                    <Row gutter={8}>
                        <Col xs={11}>
                            <Button style={{width:'100%', overflow:'hidden'}}>
                                <Link to={`/cliente/${id}`}>Acessar</Link>
                            </Button>
                        </Col>
                        <Col xs={11}>
                            <Button type="dashed" style={{width:'100%', overflow:'hidden'}}>
                                <Link to={`/cliente/editar/${id}`}>Editar</Link>
                            </Button>
                        </Col>
                        <Col xs={2}>
                            <Button type="danger" onClick={() => {
                                const key = `open${Date.now()}`;
                                notification.open({
                                    message: 'Excluir Cliente',
                                    description: <p>Deseja realmente excluir esse cliente?
                                        <Button onClick={async() =>{
                                            try{
                                                const response = await api.delete(`/clientes/${userid}/`)
                                                console.log(response);
                                                
                                            }catch(e){
                                                console.log(e)
                                            }
                                        }}>Sim</Button>
                                        <Button onClick={() => notification.close(key) }>Não</Button>
                                        </p>,
                                    duration: 3,
                                    key,
                                    icon: <Icon type="loading" />,
                                })
                            }} >
                                <Icon type="delete" />
                            </Button>
                        </Col>
                    </Row>
                    )
                },
                key: 'perfil',
                width: 200
            },
        ]

        const data = this.state.clientes

        return (
                <Layout>
                    <Sider className="contentSider"
                    trigger={null}
                    breakpoint={'sm'}
                    style={{overflow: 'auto', left: 0}}
                    collapsible
                    collapsed={this.state.collapsed}
                    onBreakpoint={this.toggleCollapsed}
                    onCollapse={this.toggleCollapsed}>

                        <Menu mode="inline" theme={"dark"} >
                            <Menu.Item className="menu-item">
                                <Icon type="home" />
                                Página inicial
                            </Menu.Item>

                            <Menu.Item className="menu-item">
                                <Link to="/clientes">
                                    <Icon type="profile" />
                                    Meus Clientes
                                </Link>
                            </Menu.Item>

                            <Menu.Item className="menu-item">
                                <Link to="/cadastrar/cliente">
                                    <Icon type="plus" />
                                    Cadastrar um Cliente
                                </Link>
                            </Menu.Item>
                    
                            <Menu.Item className="menu-item">
                                <Icon type="poweroff" />
                                Sair
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="container">
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content className="conteudo">
                            <Row gutter={8}>
                                <Col span={6}>
                                    <div className="Quadrado1"></div>
                                </Col>
                                <Col span={6}>
                                    <div className="Quadrado2"></div>
                                </Col>
                                <Col span={6}>
                                    <div className="Quadrado3"></div>
                                </Col>
                                <Col span={6}>
                                    <div className="Quadrado4"></div>
                                </Col>
                            </Row>
                            
                        <Table style={{overflow: 'auto'}} columns={columns} dataSource={data} rowKey="id"/>

                        </Content>
                    </Layout>
                </Layout>
            
        )
    }

}

export default PaginaInicial