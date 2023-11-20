import Image from "next/image";
import React from "react";

function References() {
  return (
    <section
      className="w-full h-[40vh] bg-white flex flex-col items-center justify-center my-10 gap-10"
      id="references"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-black">Nos Reference</h1>
        <span className={"w-[100px] h-1 bg-secondaryAmbsi"}></span>
      </div>
      <div className="w-full h-1/2 flex flex-row items-center justify-center gap-10">
        <Image
          src={"/assets/logo/Company/sogeaMaroc.png"}
          loading="lazy"
          width={200}
          height={200}
          alt="sofea Maroc logo"
          className="grayscale hover:grayscale-0 transition-all ease-in-out delay-150 cursor-pointer"
        />
        <Image
          src={"/assets/logo/Company/OCP.svg"}
          loading="lazy"
          width={200}
          height={200}
          alt="OCP Logo"
          className="grayscale hover:grayscale-0 transition-all ease-in-out delay-150 cursor-pointer"
        />
        <Image
          src={"/assets/logo/Company/buteces_logo-removebg-preview.png"}
          loading="lazy"
          width={200}
          height={200}
          alt="Buteces Logo"
          className="grayscale hover:grayscale-0 transition-all ease-in-out delay-150 cursor-pointer"
        />
        <Image
          src={"/assets/logo/Company/SGTMLogo.jpeg"}
          loading="lazy"
          width={200}
          height={200}
          alt="OCP LOGO"
          className="grayscale hover:grayscale-0 transition-all ease-in-out delay-150 cursor-pointer"
        />
      </div>
    </section>
  );
}

export default References;
