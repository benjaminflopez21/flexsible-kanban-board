/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './board.style';
import Column from '../../components/column/column.component';
import Card from '../../components/card/card.component';
import CardModel from '../../../models/card';
import Modal from '../../components/modal/modal.component';

const Board = (props) => {
    //const {} = props;

    const colums = {
        todo: [
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'How To Build and Deploy a Node.js Application To DigitalOcean Kubernetes Using Semaphore Continuous Integration and Delivery | DigitalOcean',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
            new CardModel().fromJson({
                title: 'Card 1',
                description: 'Description',
                assignee: 'Juan Pablo',
                tag: 'CEO',
                dueDate: '2020-10-05'
            }),
        ]
    }

    return (<main css={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#2e465b',
    }}>

        <div css={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginRight: 0,
            position: 'relative',
            transition: 'margin .1s ease-in',
        }}>
            <div css={{
                position: 'relative',
                flexGrow: 1,
            }}>
                <div css={{
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    paddingBottom: '8px',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    textAlign: 'left',
                }}>

                    
        <Column title="To Do">
            {colums.todo.map((card) => {
                return <Card
                    model={card}
                >
                </Card>
            })}
        </Column>

        <Column title="To Do">
            {colums.todo.map((card) => {
                return <Card
                    model={card}
                >
                </Card>
            })}
        </Column>


                </div>

            </div>

        </div>


<Modal title="Title" show={true}></Modal>

    </main>);
};

Board.propTypes = {

};

export default Board;
