import { IData } from "@/CombineType";
import Image from "next/image";
import { FaWeightHanging } from "react-icons/fa";
import { RxHeight } from "react-icons/rx";

// Transpalette electrique

function Transpalette() {
  const transpaletteElectrique: IData[] = [
    {
      id: 1,
      title: "BT Tyro LHE 130",
      capacity: "1 300 kg",
      levage: "195 mm",
      marque: "Toyota",
      Img: "/bt-tyro-lhe130.jpg",
    },
    {
      id: 2,
      title: "BT Levio LWE 130",
      capacity: "1 300 kg",
      levage: "195 mm",
      marque: "Toyota",
      Img: "/bt-levio-lwe130.jpg",
    },
    {
      id: 3,
      title: "BT Levio LWE 140",
      capacity: "1 400 kg",
      levage: "205 mm",
      marque: "Toyota",
      Img: "/bt-levio-lwe140.jpg",
    },
    {
      id: 4,
      title: "BT Levio LWE 160",
      capacity: "1 600 kg",
      levage: "205 mm",
      marque: "Toyota",
      Img: "/bt-levio-lwe160.jpg",
    },
    {
      id: 5,
      title: "BT Levio LWE 180",
      capacity: "1 800 kg",
      levage: "205 mm",
      marque: "Toyota",
      Img: "/bt-levio-lwe180.jpg",
    },
    {
      id: 6,
      title: "BT Levio LWE 200",
      capacity: "2 000 kg",
      levage: "205 mm",
      marque: "Toyota",
      Img: "/bt-levio-lwe200.jpg",
    },
  ];

  return (
    <section className={"w-full h-full flex flex-col mb-5"}>
      <div
        className={
          "w-full h-[100vh] bg-[url(/assets/Vente/Transpalette/99_768x400_toyota_mh.jpg)] bg-cover bg-blend-darken bg-[5px] mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Transpalette Electrique</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      <div className={"w-full px-10 my-10 flex flex-col gap-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Transpalette Electrique
          <div className={"w-[100px] h-1 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg leading-relaxed"}>
          Chez <span className={"text-secondaryAmbsi font-semibold"}>AMBS</span>
          , notre section vente vous propose une gamme complète de Transpalettes
          Manuels et Transpalettes Électriques pour répondre à vos besoins
          spécifiques en transport et manutention. Ces solutions offrent une
          efficacité inégalée et une facilité d&apos;utilisation pour déplacer
          vos charges en toute sécurité.
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
      className="w-[500px] max-h-[400px] border-gray-300/40 border-2 rounded-sm flex flex-row "
    >
      <div className={`w-full h-[200px] relative`}>
        <Image
          src={`/assets/Vente/Transpalette/elect${data.Img}`}
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
            className="object-contain object-center absolute top-5 left-5"
          />
        )}
      </div>
      <div className="w-full flex flex-col p-5 gap-5">
        <h1 className="text-xl font-black text-[#cc2229]">{data.title}</h1>
        <ul>
          <li className="bg-gray-300/20 w-full p-3 flex justify-between items-center px-5 font-semibold">
            <RxHeight size={20} className={"font-bold"} />
            {data.capacity}
          </li>
          <li className="bg-gray-400/20 w-full p-3 flex justify-between items-center px-5 font-semibold">
            <FaWeightHanging size={20} />
            {data.levage}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transpalette;
