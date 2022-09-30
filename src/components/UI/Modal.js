import { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => {
    return (<div className={styles.backdrop} onClick={onClick}></div>);
}

const ModalOverlay = ({ overlayContent }) => {
    return (<div className={styles.modal}>
        {overlayContent}
    </div>)
}

const Modal = (props) => {
    const overlayElement = document.getElementById('overlay');
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.backdropOnClick} />, overlayElement)}
        {ReactDOM.createPortal(<ModalOverlay overlayContent={props.children} />, overlayElement)}
    </Fragment>);
}

export default Modal;