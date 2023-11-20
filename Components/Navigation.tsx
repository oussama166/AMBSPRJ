"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import { IComponent } from "@/CombineType";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";

const components: IComponent[] = [
  {
    title: "Elevation",
    href: "/Elevation",
    description:
      "NACELLES ARTICULÉES - UNE VARIÉTÉ D'ÉQUIPEMENTS POUR TRAVAILLER SUR TOUS LES TERRAINS",
  },
  {
    title: "Manutention",
    href: "/Manutention",
    description:
      "DES CHARIOTS ÉLÉVATEURS DIESEL, ÉLECTRIQUES ET TÉLESCOPIQUES POUR TOUS VOS BESOINS",
  },
  {
    title: "Bâtiment et travaux publics-matériel",
    href: "/BatimentsTraveauxPublic",
    description:
      "Chariots élévateurs [diesel], électriques et télescopiques : Répondez à tous vos besoins en matériel pour le bâtiment et les travaux publics.",
  },
];

const componentVente: IComponent[] = [
  {
    title: "Transpalette Manuel",
    href: "/TranspaletteManuel",
    description:
      "TRANSPALETTE MANUEL - MANIABILITÉ ACCRUE POUR UNE MANIPULATION EFFICACE DES CHARGES",
  },
  {
    title: "Transpalette Electriques",
    href: "/Transpalette",
    description:
      "TRANSPALETTE MANUEL - MANIABILITÉ ACCRUE POUR UNE MANIPULATION EFFICACE DES CHARGES",
  },
  {
    title: "Gerbeurs Électriques",
    href: "/Gerbeur",
    description:
      "GERBEURS ÉLECTRIQUES - ÉLÉVATION EFFICACE POUR UNE GESTION OPTIMALE DES STOCKS",
  },
];

export const Navigation = () => {
  const path = usePathname();
  const getPath = (navName: string) => {
    return path.includes(navName);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className={"h-full"}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"text-black bg-transparent"}>
            Accueil
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-row justify-end items-start rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-[url('/assets/Ambs-BG.jpg')] bg-cover "
                    href="/">
                    <Image
                      src={"/assets/logoWithOutName.png"}
                      width={100}
                      height={100}
                      className={"w-5 h-5 mt-1"}
                      alt={"logo AMBS"}
                    />
                    <div className="text-lg font-medium text-white ">AMBS</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#presentation" title="Presentation">
                AMBS fournit des pièces d’origine et des pièces équivalentes
                pour tous les principaux fabricants d’équipements d’accès.
              </ListItem>
              <ListItem href="/#projet" title="Nos Projets">
                Nous travaillons actuellement sur l&#39;expansion de notre
                flotte de machines et le développement de nouvelles pièces de
                rechange de pointe pour mieux servir nos clients.
              </ListItem>
              <ListItem href="/#references" title="Nos References">
                Nous travaillons actuellement sur l&#39;expansion de notre
                flotte de machines et le développement de nouvelles pièces de
                rechange de pointe pour mieux servir nos clients.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-black bg-transparent active:text-red-500",
              getPath("Location") ? "bg-white/50" : "bg-transparent"
            )}>
            Location
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*Vente*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-black bg-transparent active:text-red-500",
              getPath("Vente") ? "bg-white/50" : "bg-transparent"
            )}>
            Vente
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentVente.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*Transport*/}
        <NavigationMenuItem>
          <Link href="/Transport" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-black",
                getPath("Transport") ? "bg-white/50" : "bg-transparent"
              )}>
              Transport
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/PieceDeRechange" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-black",
                getPath("PieceDeRechange") ? "bg-white/50" : "bg-transparent"
              )}>
              Pieces de rechange
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="Contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-black",
                getPath("Contact") ? "bg-white/50" : "bg-transparent"
              )}>
              Contactez nous
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href ?? "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
            className?.includes("active") === true
              ? "bg-accent"
              : "bg-transparent"
          )}
          scroll={true}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground lowercase">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
