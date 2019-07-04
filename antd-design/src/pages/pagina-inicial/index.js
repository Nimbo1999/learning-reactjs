import React from 'react';
import './style.css';
import { Menu, Icon, Col, Row, Layout, Breadcrumb, Table, Button, notification } from 'antd';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEnvelope, faChartArea, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons'


class PaginaInicial extends React.Component{

    state = {
        collapsed: true,
        clientes: [],
    }

    componentDidMount(){
        this.loadClients();
    }

    loadClients = async () => {
        const response = await api.get("/api/clientes/")
        
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
                                    <Row className="Quadrado" style={{color:"#fff"}}>
                                        <Col xs={12}>
                                            <h1 className="my-h1">Produtos</h1>
                                        </Col>
                                        <Col xs={12}>
                                            <FontAwesomeIcon size="3x"
                                                icon={faShoppingCart}
                                                transform={{ rotate: 330 }}
                                                style={{marginRight:"20px", marginTop: "10px"}}
                                                flip="horizontal"
                                                pull="right"/>
                                        </Col>
                                        <hr className="my-hr"/>
                                        <Col style={{textAlign:"center"}}>
                                            <a className="my-a" href="https://lopesmatheus.com">Acessar Conteúdo <FontAwesomeIcon icon={faChevronRight}/></a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row className="Quadrado" style={{color:"#fff", backgroundColor:"#055"}}>
                                        <Col xs={12}>
                                            <h1 className="my-h1">Mensagens</h1>
                                        </Col>
                                        <Col xs={12}>
                                            <FontAwesomeIcon size="3x"
                                                icon={faEnvelope}
                                                transform={{ rotate: 330 }}
                                                style={{marginRight:"20px", marginTop: "8px"}}
                                                flip="horizontal"
                                                pull="right"/>
                                        </Col>
                                        <hr className="my-hr"/>
                                        <Col style={{textAlign:"center"}}>
                                            <a className="my-a" href="https://lopesmatheus.com">Acessar Conteúdo <FontAwesomeIcon icon={faChevronRight}/></a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row className="Quadrado" style={{color:"#fff", backgroundColor:"#CD853F"}}>
                                        <Col xs={12}>
                                            <h1 className="my-h1">Gráficos</h1>
                                        </Col>
                                        <Col xs={12}>
                                            <FontAwesomeIcon size="3x"
                                                icon={faChartArea}
                                                transform={{ rotate: 330 }}
                                                style={{marginRight:"20px"}}
                                                flip="horizontal"
                                                pull="right"/>
                                        </Col>
                                        <hr className="my-hr"/>
                                        <Col style={{textAlign:"center"}}>
                                            <a className="my-a" href="https://lopesmatheus.com">Acessar Conteúdo <FontAwesomeIcon icon={faChevronRight}/></a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row className="Quadrado" style={{color:"#fff", backgroundColor:"#696969"}}>
                                        <Col xs={12}>
                                            <h1 className="my-h1">Notificações</h1>
                                        </Col>
                                        <Col xs={12}>
                                            <FontAwesomeIcon size="3x"
                                                icon={faBell}
                                                transform={{ rotate: 330 }}
                                                style={{marginRight:"20px", marginTop: "5px"}}
                                                flip="horizontal"
                                                pull="right"/>
                                        </Col>
                                        <hr className="my-hr"/>
                                        <Col style={{textAlign:"center"}}>
                                            <a className="my-a" href="https://lopesmatheus.com">Acessar Conteúdo <FontAwesomeIcon icon={faChevronRight}/></a>
                                        </Col>
                                    </Row>
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