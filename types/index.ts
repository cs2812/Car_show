import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  containerStyles?: String; //? represent optional type
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface CustomFilterProps {
  title: String;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}
