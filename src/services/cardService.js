import CardModel from '../models/card';

const storageKeys = {
    CARDS: 'cards',
}

const status = ['todo', 'inprogress', 'done'];

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
    const newCards = {
        todo:[],
        inprogress:[],
        done: [],
    };
    const parsedCards = JSON.parse(cardsStr);
    for(const state of status) {
        if(parsedCards[state]) {
            for(const card of parsedCards[state]) {
                newCards[state].push(CardModel.fromJson(card));
            }
        }
    }

    return newCards;
}

const addCard = (card) => {
    card.id = _uuidv4();
    _cards.todo.push(card);
    _saveCards();
    return _cards;
}

const removeCard = (card) => {
    forId: for(const state of status) {
        for (var i = 0; i < _cards[state].length; i++) {
            if (_cards[state][i].id === card.id) {
                _cards[state].splice(i, 1);
                break forId;
            }
        }
    }
    _saveCards();
    return _cards;
}

const editCard = (card) => {
    forId: for(const state of status) {
        for (var i = 0; i < _cards[state].length; i++) {
            if (_cards[state][i].id === card.id) {
                _cards[state][i] = card;
                break forId;
            }
        }
    }
    _saveCards();
    return _cards;
}

const _saveCards = () => {
    localStorage.setItem(storageKeys.CARDS, JSON.stringify(_cards));
}

const _uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

const setTest = () => {
    storageKeys.CARDS = 'cards-test';
    localStorage.removeItem(storageKeys.CARDS);
}

const setProd = () => {
    localStorage.removeItem(storageKeys.CARDS);
    storageKeys.CARDS = 'cards';
}

export {
    addCard,
    loadCards,
    removeCard,
    editCard,
    setTest,
    setProd,
};