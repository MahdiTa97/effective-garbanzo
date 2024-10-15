export async function getUser(id: string) {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = await res.json();
  return { user }
}
