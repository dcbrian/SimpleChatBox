import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Connexion extends Component {
state ={
    pseudo:'',
    goToChat:false
}

      handleChange = (event) => {
        this.setState({pseudo: event.target.value})
      }
      handleSubmit= event => {
        event.preventDefault()
        this.setState({goToChat:true})
      }

    render() {
        if(this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                <input 
                type='text'
                placeholder='Pseudo'
                value={this.state.pseudo} 
                onChange={this.handleChange} />
                    <button type='submit'>GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion
