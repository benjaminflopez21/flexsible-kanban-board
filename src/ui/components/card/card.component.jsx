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
        canShow,
    } = props;

    const onEditWrapper = () => {
        onEdit(model);
    }

    const onDeleteWrapper = () => {
        onDelete(model);
    }

   /* const onKeyDown = (event, snapshot) => {
        // already used
        if (event.defaultPrevented) {
          return;
        }
    
        if (snapshot.isDragging) {
          return;
        }
    
        if (event.keyCode !== 13) {
          return;
        }
    
        // we are using the event for selection
        event.preventDefault();
    
        performAction(event);
      };
    
      // Using onClick as it will be correctly
      // preventing if there was a drag
      const onClick = (event) => {
        if (event.defaultPrevented) {
          return;
        }
    
        if (event.button !== 0) {
          return;
        }
    
        // marking the event as used
        event.preventDefault();
    
        performAction(event);
      };
    
      // Determines if the platform specific toggle selection in group key was used
      const wasToggleInSelectionGroupKeyUsed = (event) => {
        const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
        return isUsingWindows ? event.ctrlKey : event.metaKey;
      };

      const wasMultiSelectKeyUsed = (event) => event.shiftKey;
    
      const performAction = (event) => {
        const {
          model,
          toggleSelection,
          toggleSelectionInGroup,
          multiSelectTo,
        } = props;
    
        if (wasToggleInSelectionGroupKeyUsed(event)) {
          toggleSelectionInGroup(model.id);
          return;
        }
    
        if (wasMultiSelectKeyUsed(event)) {
          multiSelectTo(model.id);
          return;
        }
    
        toggleSelection(model.id);
      };*/

    return <Draggable
        draggableId={model.id}
        index={index}>
            {(provided, snapshot) => (
            <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                css={canShow ? Style.card : Style.hidden}
               // onClick={onClick}
                /*onKeyDown={(event) =>
                  onKeyDown(event, snapshot)
                }*/>
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
    canShow: PropTypes.bool.isRequired
};

export default Card;
