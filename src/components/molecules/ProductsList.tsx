import { ReactNode } from "react";
import { Product } from "../atoms/Product";

export const ProductsList = ({ products, bottomAdornment, tooltip, handleClick }: { products: any[]; tooltip: string; bottomAdornment?: ReactNode; handleClick: (product: any) => void; }) => {

  return (
    <div className="flex flex-row md:flex-col gap-2 md:gap-4 h-full overflow-x-auto md:overflow-y-auto">
      {products.map((p: any) => (
        <Product key={p.id} onClick={() => handleClick(p)} tooltip={tooltip} {...p} />
      ))}
      {bottomAdornment}
    </div>
  )
}
