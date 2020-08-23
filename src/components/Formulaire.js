import React, { Component } from 'react'

class Formulaire extends Component {
state={
    message:'',
    length: this.props.length,
}

createMessage = () => {
    const { addMessage, pseudo, length } = this.props

    const message ={
        pseudo,
        message: this.state.message
    }

    addMessage(message)
    this.setState({message:'', length})
}

    handleSubmit = event => {
        event.preventDefault()
        console.log('Submit')
        this.createMessage()
    }

    handleChange = event => {
        this.setState({message:event.target.value})
        this.setState({length: (this.props.length - event.target.value.length) })
    }

    handleKeyUp= event => {
       if(event.key === 'Enter'){
           this.createMessage()
       }
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                value ={this.state.message} 
                onChange={this.handleChange} 
                onKeyUp={this.handleKeyUp}
                required 
                maxLength={this.props.length} />
                <div className="info">{this.state.length}</div>
                <button type='submit'>Envoyer</button>
            </form>
        )
    }
}

export default Formulaire