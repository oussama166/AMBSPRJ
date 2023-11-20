"use client";
import React from "react";
import { IData } from "@/CombineType";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface CardsProps {
  item: IData;
  index: number;
  curr: number;
  isCurr: boolean;
}

function BatimentPublic() {
  const data: IData[] = [
    {
      id: 1,
      title: "plaques vibrantes",
      Designation:
        "AMBS dispose de pilonneuses vibrantes dans la catégorie de 62 à 81kg. Les pilonneuses diffèrent essentiellement par leurs poids de service et leur largeur de travail .",
      Img: "BPR_45_45_083.webp",
    },
    {
      id: 2,
      title: "compresseurs mobiles",
      Designation:
        "Nous proposons une gamme complète des compresseurs d'airs mobiles allant de 7 bars jusqu'à 21 bars, conçus pour répondre à tous vos besoins en matière d'air comprimé. Notre engagement envers l'excellence se reflète dans chaque compresseur que nous proposons, alliant des performances de pointe à une fiabilité inégalée.",
      Img: "XAS-BoX-square.webp",
    },
    {
      id: 3,
      title: "mini chargeuses",
      Designation:
        "Nous proposons des chargeuses à chaînes compactes Cat® qui offrent  des améliorations axées sur les besoins des clients, associées à nos toutes dernières fonctionnalités et innovations à la pointe de l'industrie.",
      Img: "CM20190913-a2f84-64818.jpeg",
    },
    {
      id: 4,
      title: "mini pelles",
      Designation:
        "Nous proposons une gamme étendue de minipelles hydrauliques Cat® allant de 1 à 10 tonnes métriques apporte les performances d'excavation nécessaires qui vous permettront d'être productif sur tous les chantiers.",
      Img: "CM20210311-c9b28-mini_pelle_cat.jpeg",
    },
  ];

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const [page, setPage] = useState(0);
  const curr = wrap(0, data.length, page);
  const paginate = (newDirection: number) => {
    setPage((prev) => prev + newDirection);
  };

  return (
    <section className={"w-full h-full flex flex-col"}>
      {/*Hero*/}
      <div
        className={
          "w-full h-[500px] bg-[url(/assets/HeroIMG/chantier-construction.jpg)] bg-cover bg-no-repeat bg-blend-darken mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[150px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Batiment et traveaux public</h1>
          <div className={"w-[150px] h-2 bg-secondaryAmbsi"}></div>
        </div>
      </div>
      {/*Hero end*/}

      {/* Description Start */}
      <div className={"w-full h-1/2 px-10 py-5 flex flex-col gap-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Batiment et traveaux public
          <div className={"w-[100px] h-1 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg"}>
          Explorez notre gamme complète d&apos;équipements de construction de
          haute qualité, conçus pour répondre aux besoins les plus exigeants du
          secteur
        </p>
      </div>
      {/* Description End */}
      {/* Nos Produits de BTP START*/}
      <div className="relative">
        <motion.div className="w-[1000px] h-[400px] mx-auto grid grid-cols-4 grid-rows-1 justify-items-center gap-x-4 overflow-hidden">
          {data.map((item, index) => (
            <Cards
              key={item.id}
              index={index}
              item={item}
              isCurr={index === curr}
              curr={curr}
            />
          ))}
        </motion.div>

        <div className="w-full absolute top-[35%] px-20 flex items-center justify-between">
          <Button
            onClick={() => {
              paginate(-1);
            }}
            className="rounded-full"
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            onClick={() => {
              paginate(1);
            }}
            className="rounded-full"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="min-h-[100px] m-10 px-10 py-5 overflow-hidden bg-gray-300/70 transition-all ease-in-out delay-75">
        <h1 className="text-3xl text-[#333333] font-semibold capitalize">
          {data[curr].title}
        </h1>
        <p className="text-xl my-4 font-medium">{data[curr].Designation}</p>
      </div>
      {/* Nos Produits de BTP END*/}
    </section>
  );
}

export const Cards: React.FC<CardsProps> = ({ item, index, isCurr, curr }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      transition={{ type: "keyframes", delay: 1 }}
      key={item.id}
      layoutId={item.id?.toString()}
      className={cn(isCurr ? "curr" : index > curr ? "prev" : "next")}
    >
      <Image
        src={`/assets/BTP/${item.Img}`}
        className={cn(
          `${index >= 2 ? "object-contain" : "object-cover"}`,
          `w-full h-[300px] object-center scale-95`,
          isCurr ? "curr" : index > curr ? "prev" : "next"
        )}
        width={500}
        height={500}
        alt={`${item.title}_${item.id}`}
      />
    </motion.div>
  );
};

export default BatimentPublic;
