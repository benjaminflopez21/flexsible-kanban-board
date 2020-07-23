/** @jsx jsx */
import { jsx } from '@emotion/core'
import Style from './board.style';
import Column from '../../components/column/column.component';
import Card from '../../components/card/card.component';
import DeleteModal from '../../components/deleteModal/deleteModal.component';
import FormModal from '../../components/formModal/formModal.component';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadCards, editCard, addCard, removeCard, saveCards } from '../../../services/cardService';
import AppBar from '../../components/appBar/appBar.component';
import Search from '../../components/search/search.component';
import { canShow } from '../../../services/filterService';
import logo from '../../../assets/flexsible-icon.png';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorder, moveToEnd, mutliDragAwareReorder } from '../../../services/dragAndDropHelper';


const Board = () => {
    
    const [cards, setCards] = useState(null);
    const [filter, setFilter] = useState('');
    const [cardToEdit, setCardToEdit] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        if(cards) {
            saveCards(cards);
        }
        
    },[cards]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCards(loadCards());
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    },[]);

    const onEdit = (card) => {
        setCardToEdit(card);
    }

    const onDelete = (card) => {
        setCardToDelete(card);
    }

    const onCloseModal = () => {
        setCardToEdit(null);
        setCardToDelete(null);
    }

    const onDeleteModal = () => {
        setCards(removeCard(cardToDelete));
        onCloseModal();
        toast.error('🚫 Card Removed!');
    }

    const onCloseFormModal = () => {
        setCardToEdit(null);
        setCardToDelete(null);
        setShowFormModal(false);
    }

    const onSave = (card) => {
        if(card.id) {
            setCards(editCard(card));
        } else {
            setCards(addCard(card));
        }
        onCloseFormModal();
        toast.success('👌 Card Saved!');

        /*👌🚫🚧📃*/
    } 


   /* onDragStart = (start) => {
        const id = start.draggableId;
        const selected = state.selectedCards.find(
          (cardId) => cardId === id,
        );
    
        if (!selected) {
          unselectAll();
        }
        setState({
          draggingCard: start.draggableId,
        });
      };
    
      onDragEnd = (result) => {
        const destination = result.destination;
        const source = result.source;
    
        if (!destination || result.reason === 'CANCEL') {
            setDraggingCard(null);
             return;
        }
    
        const processed = mutliDragAwareReorder({
          entities: cards,
          selectedCards: selectedCards,
          source,
          destination,
        });
    
        this.setState({
          ...processed,
          draggingCard: null,
        });
        setDraggingCard(null);
      };
    
      onWindowKeyDown = (event: KeyboardEvent) => {
        if (event.defaultPrevented) {
          return;
        }
    
        if (event.key === 'Escape') {
          this.unselectAll();
        }
      };
    
      onWindowClick = (event: KeyboardEvent) => {
        if (event.defaultPrevented) {
          return;
        }
        this.unselectAll();
      };
    
      onWindowTouchEnd = (event: TouchEvent) => {
        if (event.defaultPrevented) {
          return;
        }
        this.unselectAll();
      };
    
      cosnt toggleSelection = (cardId) => {
        const selectedCards: Id[] = this.state.selectedCards;
        const wasSelected: boolean = selectedCards.includes(taskId);
    
        const newTaskIds: Id[] = (() => {
          // Task was not previously selected
          // now will be the only selected item
          if (!wasSelected) {
            return [taskId];
          }
    
          // Task was part of a selected group
          // will now become the only selected item
          if (selectedCards.length > 1) {
            return [taskId];
          }
    
          // task was previously selected but not in a group
          // we will now clear the selection
          return [];
        })();
    
        this.setState({
          selectedCards: newTaskIds,
        });
      };
    
      const toggleSelectionInGroup = (cardId) => {
        const selectedCards: Id[] = this.state.selectedCards;
        const index: number = selectedCards.indexOf(cardId);
    
        // if not selected - add it to the selected items
        if (index === -1) {
          this.setState({
            selectedCards: [...selectedCards, cardId],
          });
          return;
        }
    
        // it was previously selected and now needs to be removed from the group
        const shallow: Id[] = [...selectedCards];
        shallow.splice(index, 1);
        this.setState({
          selectedCards: shallow,
        });
      };
    
      // This behaviour matches the MacOSX finder selection
      const multiSelectTo = (cardId) => {
        const updated: ?(Id[]) = multiSelect(
          this.state.entities,
          this.state.selectedCards,
          cardId,
        );
    
        if (updated == null) {
          return;
        }
    
        this.setState({
          selectedCards: updated,
        });
      };
    
      const unselect = () => {
        unselectAll();
      };
    
      const unselectAll = () => {
        setSelectedCards([]);
      };*/
    
    const onSetFilter = (filter) => {
        setFilter(filter);
    }

    const onDragEnd = (result) => {
        const { source, destination } = result;
    
        if (!destination) {
          return;
        }
        const sInd = source.droppableId;
        const dInd = destination.droppableId;
    
        if (sInd === dInd) {
            const items = reorder(cards[sInd], source.index, destination.index);
            setCards({
                ...cards,
                [sInd]: items
            });
        } else {
            const result = moveToEnd(cards[sInd], cards[dInd], source, destination);
    
            setCards({
                ...cards,
                [sInd]: result[sInd],
                [dInd]: result[dInd]
            });
        }
    }


    return (<main css={Style.wrapper}>
        <AppBar>

            <img
                css={Style.logo}
                alt="Logo"
                src={logo}/>

            <Search onFilter={onSetFilter}/>

            <div css={Style.newCardutton} onClick={()=>{
                setShowFormModal(true);
            }}>Add new Card</div>


        </AppBar>
        <div css={Style.board}>
            <div css={Style.innerBoard}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div css={Style.content}>
                    <Droppable droppableId={`todo`}>
                        {(provided, snapshot) => (
                            <Column 
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}
                                {...provided.droppableProps}
                                title="To Do" 
                                loading={!cards}
                                placeHolderCount={3}>
                                {cards && cards.todo.map((card, index) => {
                                    return  <Card
                                        key={card.id}
                                        index={index}
                                        canShow={canShow(card, filter)}
                                        model={card}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />;
                                })}
                            </Column>
                        )}
                    </Droppable>

                    <Droppable droppableId={`inprogress`}>
                        {(provided, snapshot) => (
                            <Column 
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}
                                {...provided.droppableProps}
                                title="In Progress" 
                                loading={!cards}
                                placeHolderCount={2}>
                                {cards && cards.inprogress.map((card, index) => {
                                    return  <Card
                                        key={card.id}
                                        index={index}
                                        canShow={canShow(card, filter)}
                                        model={card}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />;
                                })}
                            </Column>
                        )}
                    </Droppable>

                    <Droppable droppableId={`done`}>
                        {(provided, snapshot) => (
                            <Column 
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}
                                {...provided.droppableProps}
                                title="Done" 
                                loading={!cards}
                                placeHolderCount={4}>
                                {cards && cards.done.map((card, index) => {
                                    return  <Card
                                        key={card.id}
                                        index={index}
                                        canShow={canShow(card, filter)}
                                        model={card}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />;
                                })}
                            </Column>
                        )}
                    </Droppable>



                </div>
            </DragDropContext>
            </div>
        </div>


    <DeleteModal model={cardToDelete}
        onClose={onCloseModal}
        onDelete={onDeleteModal}> 
    </DeleteModal>

    <FormModal model={cardToEdit}
        show={showFormModal}
        onClose={onCloseFormModal}
        onSave={onSave}> 
    </FormModal>

    <ToastContainer
        css={Style.toast}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    </main>);
};

Board.propTypes = {

};

export default Board;
