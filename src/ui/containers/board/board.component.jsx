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
import { loadCards, editCard, addCard, removeCard } from '../../../services/cardService';
import AppBar from '../../components/appBar/appBar.component';
import logo from '../../../assets/flexsible-icon.png';


const Board = (props) => {
    
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cardToEdit, setCardToEdit] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);

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


    return (<main css={Style.wrapper}>
        <AppBar>

        <img
              css={Style.logo}
              alt="Logo"
              src={logo}
            />

            <div css={Style.newCardutton} onClick={()=>{
                setShowFormModal(true);
            }}>Add new Card</div>


        </AppBar>
        <div css={Style.board}>
            <div css={Style.innerBoard}>
                <div css={Style.content}>
                    <Column title="To Do" 
                        loading={!cards}
                        placeHolderCount={3}>
                        {cards && cards.todo.map((card) => {
                            return <Card
                                key={card.id}
                                model={card}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            >
                            </Card>
                        })}
                    </Column>

                    <Column title="In Progress" 
                        loading={!cards}
                        placeHolderCount={2}>
                        {cards && cards.inprogress.map((card) => {
                            return <Card
                                key={card.id}
                                model={card}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            >
                            </Card>
                        })}
                    </Column>

                    <Column title="Done" 
                        loading={!cards}
                        placeHolderCount={4}>
                        {cards && cards.done.map((card) => {
                            return <Card
                                key={card.id}
                                model={card}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            >
                            </Card>
                        })}
                    </Column>
                </div>
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
