/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Modal from '../../components/modal/modal.component';
import Style from './deleteModal.style';


const DeleteModal = (props) => {
    const {
        model,
        onClose,
        onDelete,
    } = props;

    return <Modal title="Delete Card" 
    show={Boolean(model)}
    onClose={onClose}>
        <div>
            <p css={Style.message}>Do you really want to delete this card?</p>
            <div css={Style.buttons}>
                <div css={Style.noButton} onClick={onClose}>No</div>
                <div css={Style.yesButton} onClick={onDelete}>Yes</div>
            </div>
        </div>
    </Modal>;
};

DeleteModal.propTypes = {
    model: PropTypes.objectOf(PropTypes.any).isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
