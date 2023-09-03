import Image from "next/image";
import { Button } from "@/components/ui/button";
import MovieList from "./MovieList";
export default function Home() {
  return (
    <>
      <div className=" flex  justify-between flex-col min-h-screen      p-10">
        <MovieList />
      </div>
    </>
  );
}
