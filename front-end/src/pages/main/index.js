import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'
import { Link } from 'react-router-dom'

class Main extends Component {

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

    render(){

        const { clientes } = this.state

        return (
            <div className="client-list">

                <h1>Clientes</h1>

                {clientes.map(client =>(

                    <article key={client.id}>
                        <strong>{client.nome}</strong><br/>
                        <Link to={`/cliente/${client.id}`}>Acessar</Link>
                    </article>

                ))}
            </div>
        )
    }
}

export default Main