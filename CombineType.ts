export interface IData {
  id?: string | number;
  title?: string;
  type?: string;
  marque?: "Terex" | "Toyota";
  capacity?: string;
  Info?: string[];
  Designation?: string;
  levage?: string | number;
  Img?: string[] | string;
  typeObj?: "diesel" | "electrique";
}

export interface IProject {
  id?: number | string;
  title: string;
  description: string;
  img: string | string[];
}

export interface IComponent {
  title: string;
  href: string;
  description: string;
}

export interface IEmail {
  username: string;
  email: string;
  message: string;
}
