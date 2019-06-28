import React from 'react'
import './style.css'
import { Layout } from 'antd'

function Footer(){

    const { Footer } = Layout

    return(
        <Layout>
            <Footer id="mainFooter">
                <p><b>Created by Matheus Lopes © 2019</b></p>
            </Footer>
        </Layout>
    )
}
export default Footer;