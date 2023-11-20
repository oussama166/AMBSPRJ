"use client";
import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Arrow } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TolTipProps {
  url: string;
  description: string;
}

const nacelle: TolTipProps[] | [] = [
  {
    url: "/assets/nacelleIcons/nacelleCiseaux.png",
    description: "Nacelle Ciseaux",
  },
  {
    url: "/assets/nacelleIcons/nacelleArticulier.png",
    description: "Nacelle Articulees",
  },
  {
    url: "/assets/nacelleIcons/NacelleTelescopic.png",
    description: "Nacelle telescopiques",
  },
  {
    url: "/assets/nacelleIcons/MatVertical.png",
    description: "Mats Vertical",
  },
];
const nacelleInfo = {
  "Nacelle Articulees": {
    title: "Nacelle Articulees",
    diman: "12 à 43 mètres",
    desi: "Pour tous vos besoins de maintenance, d'installation ou d'élagage, nos nacelles articulées,offrant une hauteur de travail de 12 à 41 mètres, sont là pour vous accompagner.",
    dies: true,
    elec: true,
  },
  "Nacelle Ciseaux": {
    title: "Nacelle Ciseaux",
    diman: "8 à 18 mètres",
    desi: "Polyvalentes et adaptées à divers secteurs tels que le BTP, le nettoyage ou l'événementiel, les plateformes ciseaux de AMBS offrent une large plage de travail allant de 8 à 18 mètres en hauteur.",
    dies: true,
    elec: true,
  },
  "Nacelle telescopiques": {
    title: "Nacelles télescopiques",
    diman: "16 à 43 mètres",
    desi: "Grâce à leur ample portée et leur vitesse, les nacelles télescopiques sont des équipements idéaux pour les chantiers navals, les opérations de démolition, de construction, ainsi que pour l'entretien et la finition des ouvrages d'art .",
    dies: true,
    elec: true,
  },
  "Mats Vertical": {
    title: "Mâts verticaux",
    diman: "6 à 10 mètres",
    desi: "Parfaits pour les zones difficiles d'accès, AMBS offrent des mâts verticaux vous élèvent à une hauteur de travail allant de 6 à 10 mètres. Conçus pour des applications telles que la maintenance ou les inventaires en entrepôt .",
    dies: false,
    elec: true,
  },
};
export default function Elevation() {
  const [descriptionNacelle, setDescriptionNacelle] = useState("");
  const route = useRouter();
  return (
    <section className={"w-full h-full flex flex-col"}>
      {/*Hero*/}
      <div
        className={
          "w-full h-[500px] bg-[url(/assets/levageBg.jpg)] bg-cover bg-no-repeat bg-blend-darken mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Levage</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      {/*Hero end*/}

      <div className={"w-full h-1/2 px-10 py-5 flex flex-col gap-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Levage
          <div className={"w-[100px] h-2 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg"}>
          Notre gamme d&apos;équipements de levage comprend des nacelles ciseaux
          et articulées, ainsi que des nacelles télescopiques et des mâts
          verticaux, disponibles en versions électriques et diesel. Conçus pour
          répondre à une variété de besoins de hauteur de travail, nos
          équipements offrent des solutions sûres et efficaces pour vos projets
          de construction, d&apos;entretien ou de rénovation
        </p>
      </div>
      <div
        className={
          "w-full bg-amber-200/30 px-10 py-14 flex flex-col justify-center items-center gap-10"
        }
      >
        <div className={"flex gap-10"}>
          {nacelle.map((elem, index) => (
            <TolTip
              key={`${elem.description}_${index}`}
              url={elem.url}
              description={elem.description}
              setData={setDescriptionNacelle}
            />
          ))}
        </div>
      </div>
      {descriptionNacelle !== "" && (
        <div className={"my-10 mx-28 p-5  min-w-[400px] border-2 rounded"}>
          <div className="mb-3">
            <h1 className={"text-2xl font-medium text-gray-400"}>
              {nacelleInfo[descriptionNacelle].title}
            </h1>
            <span className={"text-secondaryAmbsi font-semibold mb-10"}>
              {nacelleInfo[descriptionNacelle].diman}
            </span>
          </div>
          <p className={"text-lg font-medium"}>
            {nacelleInfo[descriptionNacelle].desi}
          </p>
          <div className={"flex items-cente gap-5"}>
            <h1 className={"text-xl my-3 font-semibold text-primaryAmbsi"}>
              Consulter Notre article :{" "}
            </h1>
            <div className={"flex items-center"}>
              {nacelleInfo[descriptionNacelle]["dies"] === true ? (
                <Button
                  className={"mr-5"}
                  onClick={() => {
                    route.push(
                      `Elevation/Diesel/${descriptionNacelle.split(" ")[1]}`
                    );
                  }}
                >
                  Diesel
                </Button>
              ) : (
                ""
              )}
              {nacelleInfo[descriptionNacelle]["elec"] === true ? (
                <Button
                  onClick={() => {
                    route.push(
                      `Elevation/Electrique/${descriptionNacelle.split(" ")[1]}`
                    );
                  }}
                >
                  Electric
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

interface ItolTip {
  url: string;
  description: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const TolTip: React.FC<ItolTip> = ({ url, description, setData }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            setData(description);
          }}
        >
          <Image
            src={url}
            width={100}
            height={100}
            loading={"eager"}
            alt={description}
          />
        </TooltipTrigger>
        <TooltipContent className={"text-black bg-white"} side={"top"}>
          <p>{description}</p>
          <Arrow width={11} height={5} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
