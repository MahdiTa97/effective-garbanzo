import { getUser } from "@/actions/getUser";
import Link from "next/link";

export default async function Index({ params }: { params: { id: string } }) {
  const { user } = await getUser(params.id);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap lg:w-4/5 md:mx-auto md:mb-2 -mx-2">
          <Link className="font-bold link link-primary" href="/">Return Back</Link>
        </div>
        <div className="text-center mb-5">

          <h1 className="md:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 capitalize">
            {`${user.name.firstname} ${user.name.lastname}`}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {`Address: ${user.address.number} ${user.address.street}, ${user.address.city}, ZIP: ${user.address.zipcode}, Coordinates: (${user.address.geolocation.lat}, ${user.address.geolocation.long})`}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 md:mx-auto md:mb-2 -mx-2">
          <div className="p-2 md:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              id:
              <span className="ml-1 title-font font-medium">{user.id}</span>
            </div>
          </div>
          <div className="p-2 md:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              email:
              <span className="ml-1 title-font font-medium">{user.email}</span>
            </div>
          </div>
          <div className="p-2 md:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              username:
              <span className="ml-1 title-font font-medium">{user.username}</span>
            </div>
          </div>
          <div className="p-2 md:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              phone:
              <span className="ml-1 title-font font-medium">{user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
