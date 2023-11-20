"use client";
import { searchCible } from "@/Utils/SearchFunction";
import Image from "next/image";

interface IData {
  id: string;
  type: string;
  Info: Array<string>;
  Designation: string;
  Img: Array<string>;
}

interface IDataProduct {
  title: string;
  data: IData[];
}
export default function PieceDeRechange() {
  const PieceRechange: string[] = [
    "Batteries,Chargers",
    "Electrical components",
    "Wheels,tires",
  ];

  const getData = () => {
    const productData: IDataProduct[] = [];

    PieceRechange.forEach((elem) => {
      const searchData = searchCible(elem);

      searchData.forEach((cat) => {
        const setData: IDataProduct = {
          title: cat["title"],
          data: cat["data"] as IData[],
        };
        productData.push(setData);
      });
    });

    return productData.map((product, index) => (
      <div key={index} className="w-full flex flex-col flex-wrap gap-5">
        <h1 className="bg-secondaryAmbsi text-white text-5xl font-bold text-center py-3 font-sans">
          {product["title"]}
        </h1>

        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-3">
          {product["data"].map((elem, index) => (
            <div
              key={`${elem.id}_${elem.type}${index}`}
              className="peer pee w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
              <a href="#">
                <Image
                  className="w-full h-full object-contain p-8 rounded-t-lg"
                  src={`/images/Products${elem["Img"][0]}`}
                  alt="product image"
                  width={100}
                  height={100}
                  loading="eager"
                />
              </a>
              <div className="px-5 pb-5">
                {elem.Info.length >= 1 && (
                  <div className="w-full flex flex-col items-center mt-2.5 mb-5 bg-zinc-400/50 rounded-lg">
                    {elem.Info.map(
                      (el, index) =>
                        index !== 0 && (
                          <span key={`${elem.id}_${index}_${elem.type}`}>
                            {el}
                          </span>
                        )
                    )}
                  </div>
                )}
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {elem.Designation}
                  </h5>
                </a>
                <div className="text-sm absolute top-5 left-2 bg-black/40 text-white p-2 max-w-[150px]  whitespace-nowrap overflow-hidden text-ellipsis rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:max-w-[450px]">
                  {elem.Info[0]}
                </div>
                <div className="text-base absolute bottom-[40%] right-5 text-black font-semibold  p-2 max-w-[150px]  whitespace-nowrap overflow-hidden text-ellipsis rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
                  {elem.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-full py-10 px-10">
      <div className="flex flex-col">
        <h1 className="text-start text-3xl font-bold">Pieces de rechnage</h1>
        <span className="w-[200px] h-2 bg-secondaryAmbsi"></span>
      </div>
      <p className="text-xl font-medium my-10 mx-5">
        AMBS fournit des pièces d’origine et des pièces équivalentes pour tous
        les principaux fabricants d’équipements d’accès.
      </p>

      <div className="w-full h-full flex flex-col items-center gap-5">
        {getData()}
      </div>
    </div>
  );
}
