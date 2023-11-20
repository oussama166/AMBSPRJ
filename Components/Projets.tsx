"use client";
import { IProject } from "@/CombineType";
import Image from "next/image";
import React from "react";

const data: IProject[] = [
  {
    id: 1,
    title: "banque populaire",
    description: "chantier tour banque populaire",
    img: "/projets1.jpg",
  },
  {
    id: 2,
    title: "attijariwafa bank",
    description: "Chantier tour attijariwafabank",
    img: "/projets2.jpg",
  },
  {
    id: 3,
    title: "sad al massira",
    description: "Chantier sad al massira",
    img: "/projets3.jpg",
  },
  {
    id: 4,
    title: "Sensiyo benslimane",
    description: "Chantier Sensiyo benslimane",
    img: "/projets4.jpg",
  },
  {
    id: 5,
    title: "Mall Casablanca",
    description: "Chantier Mall Casablanca",
    img: "/projets5.jpg",
  },
];

function Projets() {
  return (
    <section
      className="bg-darkAmbsi w-full h-screen p-10 flex flex-col items-start justify-center my-5 gap-10"
      id="projet">
      <div className="flex flex-col gap-5">
        <span className={"w-[100px] h-1 bg-secondaryAmbsi"}></span>
        <h1 className="text-3xl font-semibold text-white capitalize">
          nos projets récents.
        </h1>
        <h4 className="text-gray-300 font-semibold max-w-[50vw] capitalize">
          Une compilation des initiatives et des travaux récemment entrepris,
          mettant en lumière les projets les plus récents, leurs objectifs .
        </h4>
      </div>

      <div className="w-full h-full px-5 flex flex-row  gap-5">
        {data.map((elem) => (
          <Card
            key={elem.id}
            description={elem.description}
            img={elem.img}
            title={elem.title}
          />
        ))}
      </div>
    </section>
  );
}

export const Card = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string | string[];
}) => {
  return (
    <div className="w-[500px] h-[400px] flex flex-col p-5 justify-center  bg-white gap-5">
      <div className={`w-full h-1/2 flex-grow-0`}>
        <Image
          src={`/assets/NosProjets${img}`}
          width={100}
          height={200}
          className="w-full h-full object-fill"
          alt="pri"
        />
      </div>
      <div className=" h-1/2 flex justify-center flex-col gap-5 flex-grow-0">
        <h1 className="text-xl text-black capitalize font-bold">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Projets;
