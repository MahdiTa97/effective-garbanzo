export async function getProducts(limit?: number) {
  const res = await fetch(`https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ""}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const products: any[] = await res.json();
  return { products }
}
