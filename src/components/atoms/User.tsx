import Link from "next/link"

export const User = ({ fullName, email, id }: { fullName: string, email: string, id: string }) => {
  return (
    <Link href={`user/${id}`} className="card card-compact card-bordered hover:border-primary tooltip tooltip-bottom" data-tip="more details">
      <div className="flex-grow card-body">
        <h2 className="text-base title-font font-medium capitalize">{fullName}</h2>
        <p className="text-neutral-500">{email}</p>
      </div>
    </Link>
  )
}
