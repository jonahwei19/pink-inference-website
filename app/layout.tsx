import "./globals.css";
import { Roboto_Mono, Montserrat } from "next/font/google";
import SmoothScroll from "@/utilities/SmoothScroll";
import Head from "next/head";

const robotoMonoFont = Roboto_Mono({
  weight: ["100", "300"],
  preload: false,
});

export const metadata = {
  title: "Pink Inference",
  description:
    "Explore the Future of AI and Robotics with Pink Inference. We are developing wetware architecture for the next generation of computing and neuropharmacology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body className={robotoMonoFont.className}>
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
