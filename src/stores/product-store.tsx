/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'zustand/vanilla'

export type ProductState = {
  selectedProducts: any;
}

export type ProductActions = {
  addProduct: (product: any) => void
  removeProduct: (product: any) => void
}

export type ProductStore = ProductState & ProductActions

export const initProductStore = (): ProductState => {
  return { selectedProducts: [] }
}

export const defaultInitState: ProductState = {
  selectedProducts: [],
}

export const createProductStore = (
  initState: ProductState = defaultInitState,
) => {
  return createStore<ProductStore>()((set) => ({
    ...initState,
    addProduct: (product) => set((state) => {
      const productItem = state.selectedProducts.find((p: any) => p.id === product.id)
      return (({
        selectedProducts: [...(productItem ? [] : [product]), ...state.selectedProducts,],
      }))
    }),
    removeProduct: (product) => set((state) => ({ selectedProducts: state.selectedProducts.filter((p: any) => p.id !== product.id) })),
  }))
}
