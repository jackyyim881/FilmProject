import React from "react";
import MovieData from "../api/page";
export default function Home() {
  return (
    <>
      <div className=" flex  justify-between flex-col min-h-screen      p-10">
        <MovieData />
      </div>
    </>
  );
}
