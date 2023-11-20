import { IData } from "@/CombineType";
import Image from "next/image";

function Gerbeur() {
  const transpaletteElectrique: IData[] = [
    {
      id: 1,
      title: "BT Tyro 1t",
      Designation: "Facile à manœuvrer dans les petits espaces",
      marque: "Toyota",
      Img: "/bt-tyro-stacker-packshot-08-main.webp",
    },
    {
      id: 2,
      title: "Gerbeur BT Staxio 1,2t",
      Designation:
        "Hauteur de gerbage élevée pour un usage moyennement intensif",
      marque: "Toyota",
      Img: "/toyota-bt-staxio-swe100-main2.webp",
    },
    {
      id: 3,
      title: "Gerbeur électrique BT Staxio 1,6t",
      Designation: "Gerbeur électrique robuste pour une utilisation intensive",
      marque: "Toyota",
      Img: "/toyota-bt-staxio-swe160-main (1).webp",
    },
    {
      id: 4,
      title: "Gerbeur électrique BT Staxio 2t",
      Designation:
        "Adaptation idéale aux applications nécessitant des déplacements sur de longues distances",
      marque: "Toyota",
      Img: "/toyota-bt-staxio-swe160-main.webp",
    },
  ];

  return (
    <section className={"w-full h-full flex flex-col mb-5"}>
      <div
        className={
          "w-full h-[100vh] bg-[url(/assets/Vente/Gerbeur/gerbeur_electrique_toyota_staxio-bg.jpg)] bg-cover bg-blend-darken bg-[5px] mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Gerbeur Electrique</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      <div className={"w-full px-10 my-10 flex flex-col gap-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Gerbeur Electrique
          <div className={"w-[100px] h-1 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg leading-relaxed"}>
          Chez <span className={"text-secondaryAmbsi font-semibold"}>AMBS</span>
          , notre section vente vous propose une gamme complète de gerbeurs
          électriques pour répondre à vos besoins spécifiques en matière de
          manutention. Nos gerbeurs électriques offrent une solution efficace et
          sécurisée pour déplacer vos charges en toute simplicité. Dotés de
          fonctionnalités avancées, nos gerbeurs électriques sont conçus pour
          optimiser l&apos;efficacité de votre processus de manutention tout en
          assurant la sécurité de vos opérations.
        </p>
      </div>
      {/*  parties transpalette */}
      <section className="w-full h-full flex flex-row flex-wrap flex-shrink-0 items-center justify-center gap-5 my-5">
        {transpaletteElectrique.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
      </section>
    </section>
  );
}

export const Card = ({ data }: { data: IData }) => {
  return (
    <div
      key={`${data.id}_info`}
      className="w-[500px] h-[250px] border-gray-300/40 border-2 rounded-sm flex flex-row "
    >
      <div className={`w-full h-[200px] relative`}>
        <Image
          src={`/assets/Vente/Gerbeur${data.Img}`}
          width={100}
          height={100}
          alt={`grue_${data.id}`}
          className="w-full h-full object-contain scale-90 object-center"
        />
        {data.marque == "Toyota" && (
          <Image
            src={"/assets/logo/Company/toyota-1.svg"}
            width={100}
            height={40}
            alt="trans logo"
            className="object-contain object-bottom absolute -bottom-3 left-5"
          />
        )}
      </div>
      <div className="w-full flex flex-col p-5 gap-5">
        <h1 className="text-xl font-black text-[#cc2229]">{data.title}</h1>
        <ul>
          <li className="bg-gray-300/20 w-full p-3 flex justify-center items-center px-5 font-semibold text-center rounded-md">
            {data.Designation}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gerbeur;
