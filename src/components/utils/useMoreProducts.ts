import { getProducts } from "@/actions/getProducts";
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const useMoreProducts = ({ initialProducts }: { initialProducts: any[]; }) => {
  const [products, setProducts] = useState<any[]>(initialProducts)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    const loadMoreProducts = async () => {
      const { products } = await getProducts()
      setProducts(products)
      setIsLoaded(true)
    }

    if (inView) {
      loadMoreProducts()
    }
  }, [inView])

  return ({ ref, products, isLoaded })
}
