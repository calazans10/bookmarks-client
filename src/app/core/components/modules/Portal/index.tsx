import React from 'react';
import ReactDOM from 'react-dom';

const modalRootId = 'modal-root';
let modalRoot = document.getElementById(modalRootId) as HTMLElement;
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

class Portal extends React.Component<{ children: React.ReactNode }> {
  el: HTMLElement = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
