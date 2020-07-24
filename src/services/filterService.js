const canShow = (card, filter) => {
    if(!filter) {
        return true;
    } 
    const lowerFilter = filter.toLowerCase();

    if(card.title.toLowerCase().startsWith(lowerFilter) || 
    card.tag.toLowerCase().startsWith(lowerFilter) || 
    (card.assignee && card.assignee.toLowerCase().startsWith(lowerFilter))) {
        return true;
    }

    return false;
}

export {
    canShow
};