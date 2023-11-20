"use client";
import { IData } from "@/CombineType";
import { CardSlide } from "@/Components/Slider";
import { Button } from "@/Components/ui/button";
import { conbineSearch, searchOccurenceBig } from "@/Utils/SearchFunction";
import { useRouter } from "next/navigation";

export default function Manutention() {
  const chariotTelescopiques: IData[] | [] = searchOccurenceBig(
    "Chariot",
    "telescopique"
  );
  const chariotTelescopiquesRotatif: IData[] | [] = searchOccurenceBig(
    "Chariot",
    "telescopique rotatif"
  );

  const chariotElvateurDiesel: IData[] | [] = searchOccurenceBig(
    "Chariot",
    "elvateur",
    "diesel"
  );
  const chariotElvateurElectrique: IData[] | [] = searchOccurenceBig(
    "Chariot",
    "elvateur",
    "electrique"
  );

  const router = useRouter();

  const redirectToGrue = () => {
    router.push("Manutention/Grue");
  };

  return (
    <section className={"w-full h-full flex flex-col"}>
      <div
        className={
          "w-full h-[500px] bg-[url(/assets/Manutention-dentreprise-16-1536x864.jpg)] bg-cover bg-blend-darken bg-[100px] mb-5"
        }>
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Manutention</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      <div className={"w-full px-10 flex flex-col gap-5 my-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Manutention
          <div className={"w-[100px] h-2 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg"}>
          Découvrez notre gamme étendue d&apos;équipements de manutention conçus
          pour optimiser l&apos;efficacité de vos opérations .
        </p>
      </div>

      {/* Les chariots */}

      {/* chariot teslscopique */}
      <div className="w-full">
        <div className="w-full flex flex-col items-center py-5 font-semibold">
          <h1 className="justify-items-center text-3xl text-black">
            Chariot Telescopique
          </h1>
          <CardSlide key={1} Data={chariotTelescopiques} type="" />
        </div>
      </div>
      {/* Les Grues */}
      <div className="w-full bg-primaryAmbsi/80 py-10 flex flex-row items-center justify-center max-h-[400px] overflow-hidden">
        <div className="w-[70%] h-[400px] bg-[url(/assets/manutentionAssets/liebherr-ltm-1040-2-1-picture-gallery01_imgxlcampaignslider.jpg)] bg-cover clip-polygone"></div>
        <div className="w-1/2 h-full flex flex-col gap-5 px-2">
          <p className="text-white font-semibold text-xl line-clamp-3">
            La gamme de grues mobiles répond à une variété de besoins en matière
            de levage. Les modèles de 30 tonnes offrent une puissance robuste,
            tandis que ceux de 100 tonnes démontrent une performance
            exceptionnelle. Ces grues fournissent des solutions de levage
            fiables et efficaces, conçues avec une attention particulière pour
            une maniabilité optimale et une sécurité maximale sur tous les
            chantiers.
          </p>
          <Button
            variant={"Ambsi"}
            className="text-white w-1/2"
            onClick={redirectToGrue}>
            Voirs plus
          </Button>
        </div>
      </div>

      {/* Chariot telscopique rotaif */}
      <div className="w-full bg-zinc-300/40">
        <div className="w-full flex flex-col justify-center items-center py-5 font-semibold">
          <h1 className="justify-items-center text-3xl text-black">
            Chariot Telescopique Rotatif
          </h1>
          <CardSlide key={2} Data={chariotTelescopiquesRotatif} type="" />
        </div>
        {/* Chariot elvateur */}
        <div className="w-full flex flex-col justify-center items-center py-5 font-semibold">
          <h1 className="justify-items-center text-3xl text-black">
            Chariot Elevateur Diesel
          </h1>
          <CardSlide key={3} Data={chariotElvateurDiesel} type="diesel" />
          <h1 className="justify-items-center text-3xl text-black">
            Chariot Elevateur Electrique
          </h1>
          <CardSlide
            key={4}
            Data={chariotElvateurElectrique}
            type="electrique"
          />
        </div>
      </div>
    </section>
  );
}
