import { Category } from "../types";

export const getCategoryQuantity = (arr: Category[], value: number): number => {
  const result = arr.reduce((acc, e) => {
    const itemQuantity = e.items.filter(
      (item) => item.categoryId === value
    ).length;

    return acc + itemQuantity;
  }, 0);

  return result;
};