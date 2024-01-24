import AdminNavigationPanel from "@/app/components/admin-navigation";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function SingleEvent({ params }) {
  const eventz = await prisma.eventz.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="w-[85%] mx-auto h-screen">
      <AdminNavigationPanel />
      <div className="w-[100%] lg:w-[100%] mx-auto h-full  md:flex-col lg:flex md:w-[75%] relative top-24">
        <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row md:flex-col">
          <div className="w-[50%]">
            <Image
              src={eventz.imageUrl}
              width={550}
              height={500}
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-5 lg:w-[50%] w-full">
            <h1 className="lg:text-6xl text-3xl font-semibold md:text-4xl">
              {eventz.comapany}
            </h1>
            <p>{eventz.address}</p>
            <p>{eventz.description}</p>
            <p>{eventz.email}</p>
            <p>{eventz.firstName + " " + eventz.lastName}</p>
            <p>{eventz.number}</p>
            <div className="flex flex-col items-center justify-start lg:flex-row md:flex-row gap-10">
              <button className="w-[200px] h-[50px] bg-amber-400 shadow-lg shadow-amber-200 rounded-lg font-semibold text-white">
                Update
              </button>
              <button className="w-[200px] h-[50px] bg-red-500 shadow-lg shadow-red-200 rounded-lg font-semibold text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
