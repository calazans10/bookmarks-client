import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  modalRoot = document.getElementById('modal-root') as HTMLElement;
  el: HTMLElement = document.createElement('div');

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;