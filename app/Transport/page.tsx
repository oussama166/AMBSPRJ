export default function Transport() {
  return (
    <section className={`w-full h-screen flex flex-col`}>
      <div
        className={
          "w-full h-[500px] bg-[url(/assets/PORTE-CHARS-NACELLES-CHARIOT.png)] bg-cover bg-blend-darken bg-[100px] mb-5"
        }
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-primaryAmbsi/50 backdrop-brightness-75 gap-2">
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
          <h1 className={"text-white text-3xl"}>Transport</h1>
          <span className={"w-[100px] h-2 bg-secondaryAmbsi "}></span>
        </div>
      </div>
      <div className={"w-full px-10 my-10 flex flex-col gap-5"}>
        <div className={"text-black font-semibold text-2xl flex flex-col"}>
          Transport
          <div className={"w-[100px] h-1 bg-secondaryAmbsi"}></div>
        </div>
        <p className={"text-black font-medium text-lg"}>
          Chez <span className={"text-secondaryAmbsi font-semibold"}>AMBS</span>
          , nous vous offrons l&apos;accès à une flotte de camions plateaux et
          porte-char, garantissant la sécurité et la fiabilité de vos
          transports. Nos véhicules font l&apos;objet d&apos;un entretien
          régulier et de contrôles techniques assidus pour assurer leur état de
          fonctionnement optimal. Nos chauffeurs, qualifiés et expérimentés,
          supervisent chaque mission avec soin, assurant une manipulation
          minutieuse de vos équipements. La livraison est assurée partout au
          Maroc, pour une expérience de transport sans souci.
        </p>
      </div>
    </section>
  );
}
