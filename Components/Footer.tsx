import { Separator } from "./ui/separator";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer
      className={`w-full h-full bg-primaryAmbsi px-10 py-16 grid grid-cols-12 grid-rows-6 gap-4 text-white`}>
      <div className="col-span-6 row-span-5">
        <div className="bg-[url(/assets/logo-AMBBS-PNG-01_.png)] h-[120px] bg-contain bg-no-repeat bg-left-bottom"></div>
        <p className="px-10 font-medium text-lg max-w-1/2 pb-5">
          Votre fournisseur de confiance pour l&apos;achat et la location de
          tous types de matériels et équipements.
        </p>
      </div>
      <div className="col-span-2 row-span-5 col-start-8 py-10 text-lg">
        <ul className="flex flex-col items-start gap-5">
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Acceuill
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Elvation
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Manutention
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Batiment et traveaux public
          </li>
        </ul>
      </div>
      <div className="col-span-2 row-span-5 col-start-10 py-10">
        <ul className="flex flex-col items-start gap-5">
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Vente
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Transport
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Pieces de rechange
          </li>
          <li className="text-white cursor-pointer hover:text-secondaryAmbsi active:text-secondaryAmbsi/70">
            Contactez nous
          </li>
        </ul>
      </div>
      <div className="col-span-12 row-start-6">
        <Separator className="w-full mb-5" />
        <ul className="mx-auto w-full flex flex-row  gap-10 items-center justify-center">
          <li className="flex flex-row items-center justify-center gap-5">
            <FaPhoneAlt />
            +212 674015941
          </li>
          <li className="flex flex-row items-center justify-center gap-5 capitalize">
            <FaLocationArrow />
            rue assanaouber imm2 appartement 12, 20006 casablanca
          </li>
          <li className="flex flex-row items-center justify-center gap-5">
            <IoMdMail />
            DIRECTION@AMBSI.MA
          </li>
        </ul>
      </div>
    </footer>
  );
};
