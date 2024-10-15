'use client';

import { useProductStore } from "@/providers/product-store-provider";
import { useState } from "react";
import { Heading } from "../atoms/Heading";
import { HorizontalDivider } from "../atoms/HorizontalDivider";
import { SearchInput } from "../atoms/SearchInput";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { ProductsList } from "../molecules/ProductsList";
import { UsersList } from "../molecules/UsersList";
import { useMoreProducts } from "../utils/useMoreProducts";
import { useSearchFilter } from "../utils/useSearchFilter";


export default function HomePage({ products: initialProducts, users }: { products: any[], users: any[] }) {
  const { selectedProducts, removeProduct, addProduct } = useProductStore()

  const { products, ref, isLoaded } = useMoreProducts({ initialProducts })

  const [productSearch, setProductSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [selectedProductSearch, setSelectedProductSearch] = useState("");

  const filteredProducts = useSearchFilter(products, productSearch, (product) => product.title);
  const filteredUsers = useSearchFilter(users, userSearch, (user) => `${user.name.firstname} ${user.name.lastname}`);
  const filteredSelectedProducts = useSearchFilter(selectedProducts, selectedProductSearch, (product: any) => product.title);

  return (
    <div className="flex flex-col md:flex-row h-dvh gap-2 mx-auto container">
      <div className="flex flex-col flex-1 pt-4 base-200 gap-2">
        <Heading title="Products" />
        <SearchInput placeholder="Search Products" name="productName" value={productSearch} onChange={(e) => setProductSearch(e.target.value)} />
        <HorizontalDivider />
        {filteredProducts?.length > 0 && (
          <ProductsList products={filteredProducts} tooltip="click to add" handleClick={addProduct} bottomAdornment={
            !isLoaded && <div ref={ref} className="loading text-primary loading-bars loading-md mx-auto mb-5" />
          } />
        )}
      </div>

      <HorizontalDivider className="flex md:hidden divider-primary" />

      <VerticalDivider />

      <div className="flex flex-col flex-1 h-1/3 md:h-full pt-4 base-200 gap-2">
        <Heading title="Users" />
        <SearchInput placeholder="Search Users" name="user" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
        <HorizontalDivider />
        {filteredUsers?.length > 0 && (<UsersList users={filteredUsers} />)}
      </div>

      <HorizontalDivider className="flex md:hidden divider-primary" />

      <VerticalDivider />

      <div className="flex flex-col flex-1 pt-4 base-200 gap-2">
        <Heading title="Selected Products" />
        <SearchInput placeholder="Search Selected Products" name="selectedProductName" value={selectedProductSearch} onChange={(e) => setSelectedProductSearch(e.target.value)} />
        <HorizontalDivider />
        {filteredSelectedProducts?.length > 0 && (
          <ProductsList products={filteredSelectedProducts} tooltip="click to remove" handleClick={removeProduct} />
        )}
      </div>
    </div >
  );
}
