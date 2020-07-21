/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './card.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import DropDowunMenu from '../dropDownMenu/dropDowunMenu.component';

const Card = (props) => {
    const {
        model,
    } = props;
    return (<div css={Style.card}>
        <div css={Style.content}>
            <span css={Style.menu}>
                <DropDowunMenu></DropDowunMenu>
            </span>
            <h1 css={Style.title}>{model.title}</h1>
            <div css={Style.description}>
                {model.description}
            </div>
            <div css={Style.row}>
                <span css={Style.tag}>{model.tag}</span>
                <span css={Style.assignee}>{model.assignee}</span>
            </div>
            <time css={Style.dueDate}>
                {model.dueDate}
            </time>
        </div>
        
    </div>);
};

Card.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    model: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Card;
