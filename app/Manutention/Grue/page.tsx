import { IData } from "@/CombineType";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaWeightHanging } from "react-icons/fa";

function Grue() {
  const data: IData[] | [] = [
    {
      id: 1,
      marque: "Terex",
      type: "TRT 35",
      capacity: "35 t",
      Img: "/TRT35_cut-out_mirror_lowres.jpg",
    },
    {
      id: 2,
      marque: "Terex",
      type: "RT 45",
      capacity: "45 t",
      Img: "/T45.jpg",
    },
    {
      id: 3,
      marque: "Terex",
      type: "TRT 65",
      capacity: "65 t",
      Img: "/T65.jpg",
    },
    {
      id: 4,
      marque: "Terex",
      type: "TRT 80",
      capacity: "80 t",
      Img: "/T80.jpg",
    },
    {
      id: 4,
      marque: "Terex",
      type: "TRT 90",
      capacity: "90 t",
      Img: "/T90.jpg",
    },
    {
      id: 5,
      marque: "Terex",
      type: "AC 100",
      capacity: "100 t",
      Img: "/T100.jpeg",
    },
  ];

  return (
    <section className={"w-full h-full flex flex-col mb-5"}>
      <div
        className={
          "w-full h-[500px] bg-[url(/assets/manutentionAssets/liebherr-ltm-1040-2-1-picture-gallery01_imgxlcampaignslider.jpg)] bg-cover bg-blend-darken bg-[2px] mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Grues</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      <div className={"w-full px-10 flex flex-col gap-5 my-5"}>
        <div
          className={
            "text-black font-semibold text-2xl flex flex-col capitalize"
          }
        >
          Notre gamme des grues
          <div className={"w-[200px] h-1 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg"}>
          Notre gamme de grues mobiles est spécialement conçue pour répondre aux
          besoins de levage les plus exigeants. De la puissance robuste de nos
          modèles de 30 tonnes à la performance exceptionnelle de nos modèles de
          100 tonnes, nous offrons une gamme complète de solutions de levage
          fiables et efficaces. Chaque grue mobile est soigneusement conçue pour
          garantir une maniabilité optimale et une sécurité maximale sur tous
          les chantiers
        </p>
      </div>
      <section className="w-full h-full flex flex-row flex-wrap flex-shrink-0 items-center justify-center gap-5">
        {data.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
      </section>
    </section>
  );
}

export const Card = ({ data }: { data: IData }) => {
  return (
    <div className="w-[500px] max-h-[400px] border-gray-300/40 border-2 rounded-sm flex flex-row">
      <div className={`w-full h-[200px]`}>
        <Image
          src={`/assets/manutentionAssets/GruesAssets${data.Img}`}
          width={100}
          height={100}
          alt={`grue_${data.id}`}
          className="w-full h-full object-contain scale-90 object-center"
        />
      </div>
      <div className="w-full flex flex-col p-5 gap-5">
        {data.marque == "Terex" && (
          <Image
            src={"/assets/logo/Company/TEREX_LOGO.png"}
            width={100}
            height={40}
            alt="TEREX logo"
            className="object-contain"
          />
        )}
        <ul>
          <li className="bg-gray-400/20 w-full p-3 flex justify-between items-center px-5 font-semibold">
            <AiFillInfoCircle size={20} />
            {data.type}
          </li>
          <li className="bg-gray-300/20 w-full p-3 flex justify-between items-center px-5 font-semibold">
            <FaWeightHanging size={20} />
            {data.capacity}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Grue;
