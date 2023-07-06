import "./globals.css";
import { Play, Noto_Sans, Prompt } from "next/font/google";
import SmoothScroll from "@/utilities/SmoothScroll";
import Head from "next/head";

// const playFont = Play({
//   weight: ['400', '700'],
//   preload:false,
// })

const notoFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

const promptFont = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`font-avenirlight`}>
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
