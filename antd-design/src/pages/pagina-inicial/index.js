import React from 'react';
import './style.css';
import { Menu, Icon, Col, Row, Layout, Breadcrumb, Table } from 'antd';


class PaginaInicial extends React.Component{

    state = {
        collapsed: true,
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
                dataIndex: 'firstName',
                key: 'firstName',
                width: 200
                
            },
            {
                title: 'Ultimo Nome',
                dataIndex: 'lastName',
                key: 'lastName',
                width: 200
            },
            {
                title: 'Idade',
                dataIndex: 'age',
                key: 'age',
                width: 200
            },
            {
                title: 'Endereço',
                dataIndex: 'address',
                key: 'address'
            }
        ]

        const data = [
            {
                key: '1',
                firstName: 'Matheus',
                lastName: 'Lopes',
                age: 20,
                address: 'Arniqueiras',
            },
            {
                key: '2',
                firstName: 'Gabriel',
                lastName: 'Lopes',
                age: 20,
                address: 'Arniqueiras',
            },
            {
                key: '3',
                firstName: 'Paulo',
                lastName: 'Rodriguez',
                age: 62,
                address: 'Águas Claras',
            },
            {
                key: '4',
                firstName: 'Neide',
                lastName: 'Oliveira',
                age: 33,
                address: 'Ceilandia',
            },
            {
                key: '5',
                firstName: 'Silvio',
                lastName: 'Suguino',
                age: 22,
                address: 'Samambaia',
            },
            {
                key: '6',
                firstName: 'Carlos',
                lastName: 'Eduardo',
                age: 40,
                address: 'Cruzeiro',
            },
            {
                key: '7',
                firstName: 'Brenda',
                lastName: 'Stefane',
                age: 22,
                address: 'Taguatinga',
            },
            {
                key: '8',
                firstName: 'Igor',
                lastName: 'Nunes',
                age: 19,
                address: 'Taguatinga',
            },
            {
                key: '9',
                firstName: 'Indinária',
                lastName: 'Santos',
                age: 19,
                address: 'Areal',
            },
            {
                key: '10',
                firstName: 'Arthur',
                lastName: 'Lopes',
                age: 14,
                address: 'Asa Norte',
            },
        ]

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
                                <Icon type="profile" />
                                Clientes
                            </Menu.Item>

                            <Menu.Item className="menu-item">
                                <a href="/cadastrar/cliente">
                                    <Icon type="plus" />
                                    Cadastrar um Cliente
                                </a>
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
                            
                        <Table style={{overflow: 'auto'}} columns={columns} dataSource={data}/>

                        </Content>
                    </Layout>
                </Layout>
            
        )
    }

}

export default PaginaInicial