const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`
}));

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

/*export const getHomeColumn = (entities, id) => {
    const columnId = entities.columnOrder.find((id: Id) => {
      const column: Column = entities.columns[id];
      return column.taskIds.includes(taskId);
    });
  
    invariant(columnId, 'Count not find column for task');
  
    return entities.columns[columnId];
};

const reorderMultiDrag = ({
    entities,
    selectedCards,
    source,
    destination,
  }) => {
    const start = entities[source.droppableId];
    const dragged = start[source.index];
  
    const insertAtIndex = (() => {
      const destinationIndexOffset = selectedCards.reduce(
        (previous, current) => {
          if (current === dragged.id) {
            return previous;
          }
  
          const final = entities[destination.droppableId];
          const column = getHomeColumn(entities, current);
  
          if (column !== final) {
            return previous;
          }
  
          const index: number = column.taskIds.indexOf(current);
  
          if (index >= destination.index) {
            return previous;
          }
  
          // the selected item is before the destination index
          // we need to account for this when inserting into the new location
          return previous + 1;
        },
        0,
      );
  
      const result: number = destination.index - destinationIndexOffset;
      return result;
    })();
  
    // doing the ordering now as we are required to look up columns
    // and know original ordering
    const orderedSelectedTaskIds: TaskId[] = [...selectedCards];
    orderedSelectedTaskIds.sort((a: TaskId, b: TaskId): number => {
      // moving the dragged item to the top of the list
      if (a === dragged) {
        return -1;
      }
      if (b === dragged) {
        return 1;
      }
  
      // sorting by their natural indexes
      const columnForA: Column = getHomeColumn(entities, a);
      const indexOfA: number = columnForA.taskIds.indexOf(a);
      const columnForB: Column = getHomeColumn(entities, b);
      const indexOfB: number = columnForB.taskIds.indexOf(b);
  
      if (indexOfA !== indexOfB) {
        return indexOfA - indexOfB;
      }
  
      // sorting by their order in the selectedCards list
      return -1;
    });
  
    // we need to remove all of the selected tasks from their columns
    const withRemovedTasks: ColumnMap = entities.columnOrder.reduce(
      (previous: ColumnMap, columnId: Id): ColumnMap => {
        const column: Column = entities.columns[columnId];
  
        // remove the id's of the items that are selected
        const remainingTaskIds: TaskId[] = column.taskIds.filter(
          (id: TaskId): boolean => !selectedCards.includes(id),
        );
  
        previous[column.id] = withNewTaskIds(column, remainingTaskIds);
        return previous;
      },
      entities.columns,
    );
  
    const final: Column = withRemovedTasks[destination.droppableId];
    const withInserted: TaskId[] = (() => {
      const base: TaskId[] = [...final.taskIds];
      base.splice(insertAtIndex, 0, ...orderedSelectedTaskIds);
      return base;
    })();
  
    // insert all selected tasks into final column
    const withAddedTasks: ColumnMap = {
      ...withRemovedTasks,
      [final.id]: withNewTaskIds(final, withInserted),
    };
  
    const updated: Entities = {
      ...entities,
      columns: withAddedTasks,
    };
  
    return {
      entities: updated,
      selectedCards: orderedSelectedTaskIds,
    };
  };

const mutliDragAwareReorder = (args) => {
    if (args.selectedCards.length > 1) {
      return reorderMultiDrag(args);
    }
    return reorderSingleDrag(args);
};*/

export {
    getItems,
    reorder,
    move, 
   // mutliDragAwareReorder,
}