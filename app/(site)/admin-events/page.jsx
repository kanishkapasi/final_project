"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdminEvents() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-all-events");

      if (response.ok) {
        const result = await response.json();
        setData(result.events);
        console.log(result.events);
      } else {
        toast.error("Error fetching events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <div className="w-[85%] h-full mx-auto relative top-44 ">
      <div className="grid place-items-center grid-cols-4 gap-8">
        {data.map((event) => (
          <div key={event.id} className="w-[200px]">
            <Image src={event.imageUrl} width={200} height={100} alt="" />
            <h1>{event.option}</h1>
            <h1>{event.company}</h1>
            <h1>{event.email}</h1>
            <h1>{event.address}</h1>
            <Link
              href={`/admin-events/${event.id}`}
              className="bg-black w-[200px] h-[50px] flex items-center justify-center text-white rounded-lg">
              More Information
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
