export default function reactSortableReducer(list, action) {
  switch (action.type) {
    case "change": {
      const { sortedList } = action;
      let newLsit = [];
      sortedList.forEach((sortedItem) => {
        newLsit = list.map((item) => {
          if (sortedItem.id === item.id) {
            return { ...item, index: sortedItem.index + 1 };
          }
          return item;
        });
      });
      return newLsit;
    }
    default: {
      throw new Error("Invalid action type: " + action.type);
    }
  }
}
