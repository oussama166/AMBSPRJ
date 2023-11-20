"use client";
import { searchOccurnece } from "@/Utils/SearchFunction";
import Image from "next/image";

interface dataRr {
  id: string;
  type: string;
  Info: string[];
  Designation: string;
  Img: string[];
}

export default function SearchingWithData({
  params,
}: {
  params: { search: string };
}) {
  let data: dataRr[] | [] = searchOccurnece(params.search, true);
  return (
    <div className={"w-full px-14 py-10 flex flex-row"}>
      <div className={`w-1/2 flex flex-col items-start justify-center gap-5`}>
        <Image
          src={`/assets/logo/Company/Haulotte.png`}
          width={200}
          height={200}
          alt={`logo_${data[0].type}`}
          loading={"eager"}
          className={"object-cover"}
        />
        <div className={"text-xl font-semibold"}>
          <h1 className={"text-xl text-gray-500 font-medium"}>
            {data[0].Info.map((elem: string, index: number) => (
              <p
                key={`${elem}_${index}`}
                className={
                  "first:text-black first:text-2xl first:font-semibold"
                }
              >
                {elem}
              </p>
            ))}
          </h1>
          <p className={"w-full text-xl font-semibold text-black"}>
            {data[0].Designation}
          </p>
        </div>
      </div>
      <div className={`w-1/2 flex items-center justify-center`}>
        {data[0].Img.map((elem: string, index: Number) => (
          <Image
            key={`${index}`}
            src={`/images/Products${elem}`}
            alt={`${params.search}_${index}_img`}
            width={300}
            height={200}
            loading={"eager"}
            className={"object-cover"}
          />
        ))}
      </div>
    </div>
  );
}
