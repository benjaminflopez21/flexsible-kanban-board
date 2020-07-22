export default class Card {
    id;
    title;
    description;
    tag;
    assignee;
    dueDate;

    static fromJson(json) {
        let card = new Card();
        card.id = json['id'];
        card.title = json['title'];
        card.description = json['description'];
        card.tag = json['tag'];
        card.assignee = json['assignee'];
        card.dueDate = json['dueDate'];
        return card;
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            tag: this.tag,
            assignee: this.assignee,
            dueDate: this.dueDate
        };
    }
}