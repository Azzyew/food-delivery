import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as cartInMemory from "./helpers/cartInMemory";
import { ProductType } from "@/types/product";

export type ProductCartProps = ProductType & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductType) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductType) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product)
        })),
  
      remove: (productId: string) => 
        set((state) => ({
          products: cartInMemory.remove(state.products, productId)
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "food-delivery:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
