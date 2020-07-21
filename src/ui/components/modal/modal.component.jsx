/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Style from './modal.style';

const Modal = (props) => {
    const {
        title,
        show,
        onClose,
    } = props;

    if(!show) {
        return null;
    }

    return (<div css={Style.wrapper}>
        <div css={Style.content}>
             <header css={Style.header}>
                <h2 css={Style.headerText}>{title}</h2>
                <span css={Style.closeIcon} onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </header>
            <main css={Style.main}>
                {props.children}
            </main>
        </div>
    </div>);
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
