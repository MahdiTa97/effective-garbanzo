import { getProducts } from "@/actions/getProducts";
import { getUsers } from "@/actions/getUsers";
import HomePage from "@/components/templates/Home";
import { INITIAL_NUMBER_OF_PRODUCTS } from "@/utils/constants";

export default async function Home() {
  const { users } = await getUsers();
  const { products } = await getProducts(INITIAL_NUMBER_OF_PRODUCTS);

  return (
    <HomePage products={products} users={users} />
  );
}
