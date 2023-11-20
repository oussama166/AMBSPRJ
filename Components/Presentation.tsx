import Image from "next/image";
import React from "react";

export default function Presentation() {
  return (
    <div
      className="w-full min-h-[60vh] p-10 bg-[#FFFCF5] flex"
      id="presentation"
    >
      <section
        className={"w-1/2 min-h-full flex items-center justify-center relative"}
      >
        <Image
          src={"/assets/halfCercle.svg"}
          height={166}
          width={166}
          className="absolute"
          alt="cercle"
        />
        <div className="w-[500px] flex flex-wrap flex-row gap-5 absolute right-5">
          <Image
            src={"/assets/heroSection1.jpg"}
            height={216}
            width={216}
            className="rounded-xl"
            alt="cercle"
            loading="eager"
          />
          <Image
            src={"/assets/heroSection3.jpg"}
            height={188}
            width={188}
            className="rounded-xl scale-90"
            alt="cercle"
            loading="eager"
          />
          <Image
            src={"/assets/heroSection2.jpg"}
            height={216}
            width={216}
            className="rounded-xl scale-90"
            alt="cercle"
            loading="eager"
          />
          <Image
            src={"/assets/container-3754794.jpg"}
            height={216}
            width={216}
            className="rounded-xl"
            alt="cercle"
            loading="eager"
          />
        </div>
      </section>
      <section className={"w-1/2 min-h-full flex items-center justify-center"}>
        <div className="flex flex-col gap-5">
          <span className={"w-[100px] h-1 bg-black"}></span>
          <h1 className="text-3xl text-black uppercase font-bold max-w-[500px]">
            Révéler les Profondeurs de Notre Identité
          </h1>
          <p className="px-2 max-w-[400px] text-sm font-semibold text-gray-500">
            AMBS est votre fournisseur de confiance pour la vente et la location
            des équipements de manutention (Nacelles, chariots élévateurs). Nous
            vous assurerons une aide professionnelle, personnalisée et flexible.
          </p>
        </div>
      </section>
    </div>
  );
}
