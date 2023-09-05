"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import MovieList from "./MovieList";
import MovieHome from "./movie/page";
export default function Home() {
  return (
    <>
      <div className=" flex  container justify-between flex-col         p-10">
        <MovieList />
        <MovieHome />
      </div>
    </>
  );
}
