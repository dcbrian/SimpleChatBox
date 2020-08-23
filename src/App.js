import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './animations.css'
import './App.css'

//Firebase
import base from './base';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount() {
    this.ref = base.syncState('/', { context: this, state: 'messages' })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  isUser = pseudo => pseudo === this.state.pseudo

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object.keys(messages)
      .slice(0, -12) // Keep the last 12 messages
      .forEach(key => messages[key] = null)

    this.setState({ messages })
  }

  render() {
    const messages = Object.keys(this.state.messages).map(key => (
      <CSSTransition timeout={300} classNames='fade' key={key}>
        <Message
          isUser={this.isUser}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      </CSSTransition>
    ))
    return (
      <div className='box'>
        <div className='messages' ref={this.messagesRef}>
          <TransitionGroup className='message'>
            {messages}
          </TransitionGroup>
        </div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
