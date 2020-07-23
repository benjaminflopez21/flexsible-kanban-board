/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import Style from './dropDowunMenu.style';
import { useState, useRef } from 'react';

const DropDowunMenu = (props) => {

    const {
        onEdit, 
        onDelete
    } = props;

    const [show, setShow] = useState(false);
    const dropdownMenu =  useRef();
    
    const showMenu = (event) => {
        if(show) {
            return;
        }
        event.preventDefault();
        setShow(true);
        document.addEventListener('click', closeMenu);
    };

    const closeMenu = (event) => {
        event.preventDefault();
        if (!dropdownMenu || !dropdownMenu.current || !dropdownMenu.current.contains(event.target)) {
            setShow(false);
            document.removeEventListener('click', closeMenu);
        }
    };

    const onEditWrapper = () => {
        setShow(false);
        onEdit();
    }

    const onDeleteWrapper = () => {
        setShow(false);
        onDelete();
    }
  
 
    return (
    <div>
        <span data-testid="open-menu-button" css={Style.button} onClick={showMenu}>
            <FontAwesomeIcon icon={faEllipsisH} />
        </span>
        
        {
        show && (
            <div css={Style.menu} ref={dropdownMenu}
            >
                <div css={Style.editButton} onClick={onEditWrapper}>Edit</div>
                <div css={Style.deleteButton} onClick={onDeleteWrapper}>Delete</div>
            </div>
            )
        }
    </div>
    );
    
  }

DropDowunMenu.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DropDowunMenu;
