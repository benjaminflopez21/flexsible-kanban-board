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
import { reorder, moveToEnd, moveAllToEnd } from '../../../services/dragAndDropHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Board = () => {
    
    const [cards, setCards] = useState(null);
    const [filter, setFilter] = useState('');
    const [cardToEdit, setCardToEdit] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    const [selectedCards, setSelectedCards] = useState([]);
    const [lastListId, setLastListId] = useState('');

    useEffect(() => {
        if(cards) {
            saveCards(cards);
        }
        
    },[cards]);

    
   const onWindowClick =  (event) => {
        if (event.defaultPrevented) {
            return;
        }
        setSelectedCards([]);
    }

    useEffect(() => {
        window.addEventListener('click', onWindowClick);
        window.addEventListener('touchend', onWindowClick);
        const timer = setTimeout(() => {
            setCards(loadCards());
        }, 5000);
        return () => {
            window.removeEventListener('click', onWindowClick);
            window.removeEventListener('touchend', onWindowClick);
            clearTimeout(timer);
        }
    },[]);


    const onEdit = (card) => {
        setSelectedCards([]);
        setCardToEdit(card);
    }

    const onDelete = (card) => {
        setSelectedCards([]);
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
    } 

    const toggleSelection = (cardId, listId) => {
        const wasSelected = selectedCards.includes(cardId);
        setLastListId(listId);
        const newSelectedCards = (() => {

          if (!wasSelected) {
            return [cardId];
          }
    
          if (selectedCards.length > 1) {
            return [cardId];
          }

          return [];
        })();
        setSelectedCards(newSelectedCards);
    };

    const toggleSelectionInGroup = (cardId, listId) => {
        let inSelectedCards = selectedCards;
        if(listId !== lastListId) {
            setLastListId(listId);
            inSelectedCards = [];
        }

        const index = inSelectedCards.indexOf(cardId);
        if (index === -1) {
            setSelectedCards([...inSelectedCards, cardId]);
            return;
        }
        const shallow = [...inSelectedCards];
        shallow.splice(index, 1);
        setSelectedCards(shallow);

    };

    const onSetFilter = (filter) => {
        setSelectedCards([]);
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
            let result;
            if(selectedCards.length > 1) {
                result = moveAllToEnd(cards[sInd], cards[dInd], source, destination, selectedCards);
            } else {
                result = moveToEnd(cards[sInd], cards[dInd], source, destination);
            }
            
            setCards({
                ...cards,
                [sInd]: result[sInd],
                [dInd]: result[dInd]
            });
        }
        setSelectedCards([]);
    }


    return (<main css={Style.wrapper}>
        <AppBar>

            <img
                css={Style.logo}
                alt="Logo"
                src={logo}/>

            <Search onFilter={onSetFilter}/>

            <div css={Style.newCardutton} onClick={()=>{
                setSelectedCards([]);
                setShowFormModal(true);
            }}>Add Card</div>

            <div css={Style.newCarduttonMin} onClick={()=>{
                setSelectedCards([]);
                setShowFormModal(true);
            }}><FontAwesomeIcon icon={faPlus} /></div>


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
                                        listId={'todo'}
                                        toggleSelection={toggleSelection}
                                        toggleSelectionInGroup={toggleSelectionInGroup}
                                        isSelected={selectedCards.includes(card.id)}
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
                                        listId={'inprogress'}
                                        toggleSelection={toggleSelection}
                                        toggleSelectionInGroup={toggleSelectionInGroup}
                                        isSelected={selectedCards.includes(card.id)}
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
                                        listId={'done'}
                                        toggleSelection={toggleSelection}
                                        toggleSelectionInGroup={toggleSelectionInGroup}
                                        isSelected={selectedCards.includes(card.id)}
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
