import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import Hello from './Hello';
import './style.css';

class App extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

     if (!event.target.checkValidity()) {
    this.setState({ displayErrors: true });
    return;
  }
  this.setState({ displayErrors: false });
  var raw = "This is expected to be sent back as part of response body.";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://postman-echo.com/post", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    
  render() {
    const { displayErrors } = this.state;
    return (
      <main>
       <h1>Giving Assistant</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div id="page">
    <div id="menuleftcontent">
        <ul id="menu">
            <li> <a href="showfirstcontent"></a>first</li>
            <li><a href="showsecondcontent">second</a>
            </li>
        </ul>
    </div>
    <div classname = "vertical"></div> 
    <div id="maincontent">
       <form onSubmit={this.handleSubmit} className={displayErrors ? 'displayErrors' : ''}>
  
  <label htmlFor="email">Email:</label>
  <input id="email" name="email" type="email" />
  
  <button>Submit</button>
</form>
    </div>
</div>
        </Modal>
        <button type='button' onClick={this.showModal}>Open</button>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
          <button id="button" onClick={handleClose}>
            X
          </button>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
