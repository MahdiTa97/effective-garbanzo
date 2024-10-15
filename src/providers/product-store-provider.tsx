// src/providers/counter-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { createProductStore, initProductStore } from '@/stores/product-store'

export type ProductStoreApi = ReturnType<typeof createProductStore>

export const ProductStoreContext = createContext<ProductStoreApi | undefined>(
  undefined,
)

export interface ProductStoreProviderProps {
  children: ReactNode
}

export const ProductStoreProvider = ({
  children,
}: ProductStoreProviderProps) => {
  const storeRef = useRef<ProductStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createProductStore(initProductStore())
  }

  return (
    <ProductStoreContext.Provider value={storeRef.current} >
      {children}
    </ProductStoreContext.Provider>
  )
}

export const useProductStore = () => {
  const counterStoreContext = useContext(ProductStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useProductStore must be used within ProductStoreProvider`)
  }

  return useStore(counterStoreContext, (state) => state)
}
