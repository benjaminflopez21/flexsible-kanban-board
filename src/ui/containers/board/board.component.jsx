/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './board.style';
import Column from '../../components/column/column.component';
import Card from '../../components/card/card.component';
import CardModel from '../../../models/card';
import DeleteModal from '../../components/deleteModal/deleteModal.component';
import { useState } from 'react';

const Board = (props) => {
    //const {} = props;

    const colums = {
        todo: [
            CardModel.fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            CardModel.fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
        ]
    }

    const [cardToEdit, setCardToEdit] = useState(null);
    const [cardToDelete, setCardToDelete] = useState(null);


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

    return (<main css={Style.wrapper}>
        <div css={Style.board}>
            <div css={Style.innerBoard}>
                <div css={Style.content}>
                    <Column title="To Do">
                        {colums.todo.map((card) => {
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

    </main>);
};

Board.propTypes = {

};

export default Board;
