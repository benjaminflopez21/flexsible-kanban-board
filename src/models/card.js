export default class Card {
    title;
    description;
    tag;
    assignee;
    dueDate;

    fromJson(json) {
        let card = new Card();
        card.title = json['title'];
        card.description = json['description'];
        card.tag = json['tag'];
        card.assignee = json['assignee'];
        card.dueDate = json['dueDate'];
        return card;
    }
}