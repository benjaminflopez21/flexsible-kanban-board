import CardModel from '../models/card';
let todo =  [
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
];
const storageKeys = {
    CARDS: 'cards',
}

let _cards = {
    todo:[],
    inprogress:[],
    done: [],
};

const loadCards = () => {
    const cardsStr = localStorage.getItem(storageKeys.CARDS);
    if(cardsStr) {
        _cards = _formatCards(cardsStr);
    }
    return _cards;
}

const _formatCards = (cardsStr) => {
    const status = ['todo', 'inprogress', 'done'];
    const newCards = {
        todo:[],
        inprogress:[],
        done: [],
    };
    const parsedCards = JSON.parse(cardsStr);
    for(const statu of status) {
        if(parsedCards[statu]) {
            for(const card of parsedCards[statu]) {
                newCards[status].push(CardModel.fromJson(card));
            }
        }
    }

    return newCards;
}

const addCard = (card) => {
    _cards.todo.push(card);
    _saveCards();
    return _cards;
}

const removeCard = (card, status) => {
    for (var i = 0; i < _cards[status].length; i++) {
        if (_cards[status][i].id === card.id) {
            _cards[status].splice(i, 1);
            break;
        }
    }
    _saveCards();
    return _cards;
}

const editCard = (card, status) => {
    for (var i = 0; i < _cards[status].length; i++) {
        if (_cards[status][i].id === card.id) {
            _cards[status] = card;
            break;
        }
    }
    _saveCards();
    return _cards;
}

const _saveCards = () => {
    localStorage.setItem(storageKeys.CARDS, _cards);
}

export {
    addCard,
    loadCards,
    removeCard,
    editCard
};