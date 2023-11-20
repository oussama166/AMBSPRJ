import { searchOccurenceBig } from "@/Utils/SearchFunction";
import Image from "next/image";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaWeightHanging } from "react-icons/fa";

interface IElctrique {
  id: string;
  type: string;
  Info: string[];
  Designation: string;
  Img: string[];
}

export default function Electrique({
  params,
}: {
  params: { electrique: string };
}) {
  const dataEle = searchOccurenceBig(
    "Nacelle",
    params.electrique,
    "electrique"
  );
  return (
    <div className="w-full px-20 py-10 ">
      <div
        className={
          "w-full h-full flex flex-row flex-wrap gap-10 items-center justify-center"
        }>
        {dataEle.map((elem: IElctrique, index: number) => (
          <Card data={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
}

export const Card = ({ data }: { data: IElctrique }) => {
  return (
    <div
      key={`${data.id}_info`}
      className="w-[500px] h-[220px] border-gray-300/40 border-2 rounded-sm flex flex-row cursor-pointer hover:shadow-md ">
      <div className={`w-full h-[200px] relative`}>
        <Image
          src={`/images/Products${data.Img}`}
          width={100}
          height={100}
          alt={`Product_${data.id}`}
          className="w-full h-full object-contain scale-90 object-center"
        />
      </div>
      <div className="w-full flex flex-col p-5 gap-5">
        <h1 className="text-xl font-black text-[#f28840]">{data.Info[0]}</h1>
        <ul>
          <li className="bg-gray-300/20 w-full p-3 flex justify-between items-center px-5 font-semibold text-center rounded-t-md">
            <AiOutlineColumnHeight />
            {data.Info[1]}
          </li>
          <li className="bg-gray-400/20 w-full p-3 flex justify-between items-center px-5 font-semibold text-center rounded-b-md">
            <FaWeightHanging />
            {data.Info[2]}
          </li>
        </ul>
      </div>
    </div>
  );
};
