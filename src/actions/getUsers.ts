export async function getUsers() {
  const res = await fetch('https://fakestoreapi.com/users');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users: [any] = await res.json();
  return { users }
}
