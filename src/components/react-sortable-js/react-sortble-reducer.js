export default function reactSortableReducer(list, action) {
  switch (action.type) {
    case "change": {
      const { sortedList } = action;

      return list.map((item) => {
        const sortedItem = sortedList.find(({ id }) => id === item.id);

        return sortedItem ? sortedItem : item;
      });
    }
    default: {
      throw new Error("Invalid action type: " + action.type);
    }
  }
}
