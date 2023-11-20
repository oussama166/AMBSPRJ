"use Client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import Image from "next/image";
import {GiHamburgerMenu} from "react-icons/gi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import {FaFacebookSquare, FaMapMarkerAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {BsFillTelephoneFill, BsMailbox2, BsSearch} from "react-icons/bs";
import {MdAlternateEmail, MdEmail} from "react-icons/md";
import {FaLocationDot, FaLocationPin} from "react-icons/fa6";
import {useRef, useState} from "react";
import {Navigation} from "@/Components/Navigation";
import {BiLogoInstagram} from "react-icons/bi";
import {RiFacebookCircleLine} from "react-icons/ri";
import Search from "./Search";

export const NavBar = () => {
    return (
        <nav
            className={`w-full lg:flex lg:items-start lg:justify-start lg:flex-col lg:flex-0 sm:min-h-[50px] xsm:min-h-[50px] bg-primaryAmbsi md:py-0 md:px-0 sm:px-14 sm:py-5 xsm:pl-5 xsm:pr-10 flex flex-row items-center justify-start md:justify-between sm:justify-between xsm:justify-between text-white`}
        >
            <div
                className={`w-full lg:h-full md:h-1/2 lg:flex lg:flex-row justify-between items-center lg:pr-10 py-5`}
            >
                {/*Logo depand the size  of screen*/}
                <div className={" lg:block lg:pl-5 md:block  sm:block xsm:block"}>
                    <Image
                        alt={"LOGO IMG"}
                        width={160}
                        height={100}
                        className="w-[180px] object-contain"
                        src={"/assets/logo-AMBBS-PNG-01_.png"}
                    />
                </div>
                {/*Logo depand the size  of screen*/}
                <div className={"w-1/2 flex items-center justify-center"}>
                    <Search/>
                </div>

                <div className={"lg:block sm:hidden xsm:hidden "}>
                    <ul className={"flex flex-row justify-center gap-5 py-5"}>
                        {/*<li className={"w-full grid grid-cols-6 gap-4"}>*/}
                        {/*    <div*/}
                        {/*        className={*/}
                        {/*            "col-span-6 row-span-2 font-medium text-white text-base flex gap-5"*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        <h1 className={"text-base font-semibold py-1 uppercase"}>*/}
                        {/*            <FaMapMarkerAlt size={30}/>*/}
                        {/*        </h1>*/}
                        {/*        <p className={"text-sm font-light capitalize"}>*/}
                        {/*            Rue Assanaouber Imm2 Appatement 12 20006,Casablanca-Maroc*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        <li className={"grid grid-cols-2 gap-4 uppercase"}>
                            <div
                                className={
                                    "col-span-2 row-span-2 font-medium text-white text-base flex gap-5 items-center"
                                }
                            >
                                <BsFillTelephoneFill size={30}/>
                                <p className={"text-sm  font-light"}>+212 674015941</p>
                            </div>
                        </li>
                        <li className={"grid grid-cols-4 gap-4 uppercase"}>
                            <div
                                className={
                                    "col-span-5 row-span-2 font-medium text-white text-base flex gap-5 items-center"
                                }
                            >
                                <MdEmail size={30}/>
                                <p className={"text-sm  font-light"}>direction@ambsi.ma</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <div
                className={
                    "lg:w-full lg:py-5 lg:flex lg:items-center justify-center text-white md:hidden sm:hidden xsm:hidden lg:bg-secondaryAmbsi"
                }
            >
                <Navigation/>
            </div>

            {/*================================================================================*/}

            {/* Mobile size START */}
            <Sheet>
                <SheetTrigger
                    className={
                        "hidden xsm:block md:hidden hover:bg-secondaryAmbsi/50 p-1 rounded transition-all ease-in-out"
                    }
                >
                    <GiHamburgerMenu size={25}/>
                </SheetTrigger>
                <SheetContent
                    side={"top"}
                    className={"h-[600px] pt-20 overflow-y-scroll"}
                >
                    <SheetHeader className={"w-full grid grid-rows-6 gap-4 h-full"}>
                        <div
                            className={
                                "col-span-12 row-span-[0.2fr] flex items-center justify-center outline-none"
                            }
                        >
                            <form className={"w-full outline-none"}>
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white outline-none"
                                >
                                    Search
                                </label>
                                <div className="relative outline-none">
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-primaryAmbsi/60 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Chercher tous nos produits ..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <BsSearch/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className={"col-span-12 row-span-3 w-full"}>
                            <Accordion type="single" collapsible className={"w-full"}>
                                <AccordionItem value={"item-1"}>
                                    <AccordionTrigger>Accueil</AccordionTrigger>
                                    <AccordionContent>
                                        <ul
                                            className={
                                                "w-full flex flex-col justify-between items-start px-4 gap-5"
                                            }
                                        >
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Presentation
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos fournisseurs
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos projets
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className={"w-full"}>
                                    <AccordionTrigger>Location</AccordionTrigger>
                                    <AccordionContent>
                                        <ul
                                            className={
                                                "w-full flex flex-col justify-between items-start px-4 gap-5"
                                            }
                                        >
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                hero section
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos fournisseurs
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos projets
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Pièces de rechange</AccordionTrigger>
                                    <AccordionContent>
                                        <ul
                                            className={
                                                "w-full flex flex-col justify-between items-start px-4 gap-5"
                                            }
                                        >
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                hero section
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos fournisseurs
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos projets
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Transport</AccordionTrigger>
                                    <AccordionContent>
                                        <ul
                                            className={
                                                "w-full flex flex-col justify-between items-start px-4 gap-5"
                                            }
                                        >
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Presentation
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos fournisseurs
                                            </li>
                                            <li
                                                className={`text-sm font-medium transition-all hover:underline capitalize`}
                                            >
                                                Nos projets
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <div
                                    className={
                                        "flex flex-1 items-center jus tify-between py-4 text-sm font-medium transition-all hover:underline active:text-secondaryAmbsi cursor-pointer"
                                    }
                                >
                                    Contacter nous
                                </div>
                            </Accordion>
                            <div
                                className={
                                    "col-span-12 row-span-2 flex justify-between my-5 flex-grow-0"
                                }
                            >
                                <div className={"col-span-4 w-full"}>
                                    <ul
                                        className={
                                            "flex flex-col gap-1 items-start px-2 text-muted-foreground text-sm w-full"
                                        }
                                    >
                                        <li className={"flex items-center gap-2"}>
                                            <BsFillTelephoneFill className={"text-secondaryAmbsi"}/>
                                            +212 674015941
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <BsMailbox2 className={"text-secondaryAmbsi"}/>{" "}
                                            parts@ambsi.ma
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <FaLocationPin className={"text-secondaryAmbsi"}/>
                                            Adresse
                                        </li>
                                        <li className={"w-full flex justify-start gap-2 py-3"}>
                                            <FaFacebookSquare
                                                size={20}
                                                className={
                                                    "text-muted-foreground active:text-secondaryAmbsi/30 hover:text-secondaryAmbsi cursor-pointer transition-all ease-in-out"
                                                }
                                            />
                                            <AiFillLinkedin
                                                size={22}
                                                className={
                                                    "text-muted-foreground active:text-secondaryAmbsi/30 hover:text-secondaryAmbsi cursor-pointer transition-all ease-in-out"
                                                }
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={
                                        "col-span-4 object-cover w-full object-right flex items-center justify-center"
                                    }
                                >
                                    <Image
                                        src={"/assets/logo AMBBS PNG-11.png"}
                                        width={150}
                                        height={150}
                                        alt="Ambs logo"
                                        priority={true}
                                        className={"object-right"}
                                    />
                                </div>
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            {/* Mobile size END*/}

            {/*================================================================================*/}
        </nav>
    );
};
