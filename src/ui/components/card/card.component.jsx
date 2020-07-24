/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './card.style';
import DropDowunMenu from '../dropDownMenu/dropDowunMenu.component';
import { Draggable } from "react-beautiful-dnd";

const Card = (props) => {
    const {
        model,
        onEdit,
        onDelete,
        index,
        listId,
        canShow,
        toggleSelection,
        toggleSelectionInGroup,
        isSelected,
    } = props;

    const onEditWrapper = () => {
        onEdit(model);
    }

    const onDeleteWrapper = () => {
        onDelete(model);
    }

   const onKeyDown = (event, snapshot) => {
        if (event.defaultPrevented) {
          return;
        }
    
        if (snapshot.isDragging) {
          return;
        }
    
        if (event.keyCode !== 13) {
          return;
        }
    
        event.preventDefault();
    
        performAction(event);
    };
    
    const onClick = (event) => {
        if (event.defaultPrevented) {
            return;
        }

        if (event.button !== 0) {
            return;
        }
        event.preventDefault();

        performAction(event);
    };
    
      
      const wasToggleInSelectionGroupKeyUsed = (event) => {
        const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
        return isUsingWindows ? event.ctrlKey : event.metaKey;
      };
    
      const performAction = (event) => {
    
        if (wasToggleInSelectionGroupKeyUsed(event)) {
          toggleSelectionInGroup(model.id, listId);
          return;
        }

        toggleSelection(model.id, listId);
      };

    return <Draggable
        draggableId={model.id}
        index={index}>
            {(provided, snapshot) => (
            <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                css={canShow 
                    ? isSelected ? Style.selectedCard : Style.card 
                    : Style.hidden}
                onClick={onClick}
                onKeyDown={(event) =>
                  onKeyDown(event, snapshot)
                }>
                <div css={Style.content}>
                    <span css={Style.menu}>
                        <DropDowunMenu 
                            data-testid="dropdown-menu"
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
                
            </div>)}
    </Draggable>;
};

Card.propTypes = {
    model: PropTypes.objectOf(PropTypes.any).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    listId: PropTypes.string.isRequired,
    canShow: PropTypes.bool.isRequired,
    toggleSelection: PropTypes.func.isRequired,
    toggleSelectionInGroup: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default Card;
