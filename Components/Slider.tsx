"use client";
import { IData } from "@/CombineType";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { Badge } from "./ui/badge";

export default function Slider() {
  // Data
  const images = [
    {
      img: "/assets/pexels-henry-&-co-2186572.jpg",
      title: "/assets/logo/Logo-white.png",
      description:
        "Votre fournisseur de confiance pour l'achat et la location de tous types de matériels et équipements",
    },
  ];
  // End Data

  return (
    <div className="keen-slider zoom-out w-full h-full">
      {images.map((img, idx) => (
        <div key={`${idx}_1`} className="w-full h-full keen-slider__slide">
          <div
            className={
              "w-full h-full relative bg-[url(/assets/free-photo-of-homme-construction-travailler-industrie.jpeg)] bg-cover"
            }>
            <div className={"absolute top-5 right-[200px] object-left"}>
              <Image
                src={img.title}
                alt={"idx"}
                height={200}
                width={200}
                loading={"lazy"}
                className={"scale-150"}
              />
              <h1
                className={
                  "max-w-[300px] overflow-hidden break-words font-semibold"
                }>
                {img.description}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CardSlide({
  Data,
  type,
}: {
  Data: IData[];
  type?: "electrique" | "diesel" | "";
}) {
  const animation = { duration: 5000, easing: (t: number) => t };
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15,
    },
    loop: false,
    mode: "free",
    created(s) {
      s.moveToIdx(Data.length, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + Data.length, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + Data.length, true, animation);
    },
  });
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center gap-5 my-10">
      <div className="w-[900px] h-full flex items-center justify-center gap-5 my-10 overflow-hidden">
        <div ref={ref} className="keen-slider">
          {Data.map((elm) => (
            <Card key={elm.id} values={elm} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Card({
  values,
  type,
}: {
  values: IData;
  type?: "electrique" | "diesel" | "";
}) {
  return (
    <div
      key={values.id}
      className={`min-w-[250px] min-h-[400px] bg-white rounded-lg border-2 border-gray-500/30 flex flex-col flex-grow-0 overflow-hidden peer-[${values.id}] transition-all ease-in-out cursor-pointer keen-slider__slide relative`}>
      {/* img */}
      <div className={`w-full h-1/2`}>
        <Image
          src={`/images/Products${values.Img[0]}`}
          className={`w-full h-full scale-75 transition-all ease-in-out`}
          width={100}
          height={100}
          loading={"eager"}
          alt={`img_${values.id}`}
        />
      </div>
      <div className="w-full py-6 px-5 h-1/2">
        <h1 className="text-gray-700 font-bold text-xl mb-2">
          {/* Tilte  */}
          {values.Info[0]}
        </h1>
        <ul className="flex flex-col gap-2">
          <li className="text-gray-700 font-normal text-base ml-10 list-disc">
            {values.Info[1]}
          </li>
          <li className="text-gray-700 font-normal text-base ml-10 list-disc">
            {values.Info[2]}
          </li>
        </ul>
        {type !== "" && (
          <Badge
            variant={"default"}
            className="my-4 px-4 py-2 absolute top-5 right-5">
            {type !== "" ? (
              type === "electrique" ? (
                <GiElectric />
              ) : (
                <BsFillFuelPumpDieselFill />
              )
            ) : (
              ""
            )}
          </Badge>
        )}
      </div>
    </div>
  );
}
