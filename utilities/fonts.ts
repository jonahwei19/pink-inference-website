import { Roboto_Mono, Montserrat } from "next/font/google";

export const robotoMonoFont = Roboto_Mono({
  weight: ["100", "300"],
  preload: true,
  subsets: ["latin"],
});

export const montserratFont = Montserrat({
  weight: "300",
  preload: true,
  subsets: ["latin"],
});
