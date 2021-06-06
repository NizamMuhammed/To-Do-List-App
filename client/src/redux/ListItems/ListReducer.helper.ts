import itemType from "../../item.type";

export const findItem = (array: itemType[], id: number): itemType => {
  let foundItem: itemType = {
    _id: "",
    id: 0,
    title: "",
    createdAt: "",
    updatedAt: "string",
    completed: false,
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      foundItem = array[i];
    }
  }
  return foundItem;
};

export const deleteItemFromList = (
  array: itemType[],
  id: number
): itemType[] => {
  const newArr: itemType[] = array.filter((item) => item.id !== id);
  return newArr;
};

export const sortList = (array: itemType[], item: itemType): itemType[] => {
  array.push(item);
  const sortedArray = array.sort(function (a, b) {
    return a.id > b.id ? 1 : -1;
  });
  return sortedArray;
};

export const foundInTrueArray = (id: number, array: itemType[]): boolean => {
  let status: boolean = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      status = true;
    }
  }
  return status;
};

export const updatedArray = (
  id: number,
  title: string,
  array: itemType[]
): itemType[] => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      array[i].title = title;
    }
  }
  return array;
};
