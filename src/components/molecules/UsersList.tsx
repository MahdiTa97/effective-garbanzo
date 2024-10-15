import { User } from "../atoms/User";

export const UsersList = ({ users }: { users: any[]; }) => {
  return (
    <div className="flex flex-col gap-2 h-full overflow-y-auto">
      {users.map((u: any) => (
        <User key={u.id} fullName={`${u.name.firstname} ${u.name.lastname}`} email={u.email} id={u.id} />
      ))}
    </div>
  )
}
