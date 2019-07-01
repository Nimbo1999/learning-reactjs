import React from 'react'
import './style.css'
import { Layout } from 'antd'

function Header() {

    const { Header } = Layout

    return(
        <Layout>
            <Header id="main-header" style={{zIndex: 1}}>
                Aplicativo de Clientes
            </Header>
        </Layout>
    )
}

export default Header