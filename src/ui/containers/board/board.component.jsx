/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './board.style';
import Column from '../../components/column/column.component';
import Card from '../../components/card/card.component';
import CardModel from '../../../models/card';
import DeleteModal from '../../components/deleteModal/deleteModal.component';
import FormModal from '../../components/formModal/formModal.component';
import { useState, useEffect } from 'react';
import { loadCards } from '../../../services/cardService';

const Board = (props) => {
    
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cardToEdit, setCardToEdit] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    
    

    useEffect(() => {
        setTimeout(() => {
            setCards(loadCards());
     
        }, 5000);
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
        onCloseModal();
    }

    const onCloseFormModal = () => {
        setCardToEdit(null);
        setCardToDelete(null);
        setShowFormModal(false);
    }


    return (<main css={Style.wrapper}>
        <div css={Style.board}>
            <div css={Style.innerBoard}>
                <div css={Style.content}>
                    <Column title="To Do" 
                        loading={!cards}
                        placeHolderCount={3}>
                        {cards && cards.todo.map((card) => {
                            return <Card
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
        onSave={null}> 
    </FormModal>
    <button onClick={()=>{
        setShowFormModal(true);
    }}>show</button>
    </main>);
};

Board.propTypes = {

};

export default Board;
