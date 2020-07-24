const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const moveToEnd = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.push(removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};

const moveAllToEnd = (source, destination, droppableSource, droppableDestination, selectedCards) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const selectedIndex = [];
  for(let i = 0; i < sourceClone.length; i++) {
    if(selectedCards.includes(sourceClone[i].id)) {
      selectedIndex.push(i);
    }
  }

  let rest = 0;
  for(const index of selectedIndex) {
    const [removed] = sourceClone.splice(index-rest, 1);
    destClone.push(removed);
    rest++;
  }


  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};



export {
    reorder,
    move,
    moveToEnd,
    moveAllToEnd
}