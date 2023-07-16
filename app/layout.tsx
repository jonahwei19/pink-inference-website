import "./globals.css";
import SmoothScroll from "@/utilities/SmoothScroll";
import Head from "next/head";

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
      <body>
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
