/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './card.style';
import DropDowunMenu from '../dropDownMenu/dropDowunMenu.component';

const Card = (props) => {
    const {
        model,
        onEdit,
        onDelete,
    } = props;

    const onEditWrapper = () => {
        onEdit(model);
    }

    const onDeleteWrapper = () => {
        onDelete(model);
    }

    return (<div css={Style.card}>
        <div css={Style.content}>
            <span css={Style.menu}>
                <DropDowunMenu
                    onEdit={onEditWrapper}
                    onDelete={onDeleteWrapper}
                ></DropDowunMenu>
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
                {model.dueDate && model.dueDate.split('T')[0]}
            </time>
        </div>
        
    </div>);
};

Card.propTypes = {
    model: PropTypes.objectOf(PropTypes.any).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Card;
