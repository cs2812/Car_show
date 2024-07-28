import { MouseEventHandler } from "react";

export interface CustomButtonProps{
title:String,
containerStyles?:String,//? represent optional type
handleClick:MouseEventHandler<HTMLButtonElement>;

}