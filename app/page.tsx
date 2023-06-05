"use client";
import { Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Loading from "./components/Loading";
import Summarry from "./components/Summary";
import Slavery from "./components/Slavery";
import Freedom from "./components/Freedom";
import War from "./components/War";
import Legacy from "./components/Legacy";
import Sources from "./components/Sources";
import Link from "next/link";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#9141ac",

      text: "#fff",
    },
  },
});

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <NextUIProvider theme={theme}>
      {loaded ? (
        <div className="container m-auto lg:w-2/3">
          <NavBar />
          <Hero />
          <Summarry />
          <Slavery />
          <Freedom />
          <War />
          <Legacy />
          <Sources />
          <div className="mt-10 bg-purple-600 text-center">
            <Link href="https://github.com/ojoquinhaa/harriet-tubman">
              <strong className="text-white">FORK ME ON GITHUB</strong>
            </Link>
          </div>
        </div>
      ) : (
        <Suspense fallback={null}>
          <Loading />
        </Suspense>
      )}
    </NextUIProvider>
  );
}
