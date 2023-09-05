import React from "react";
import MovieData from "../api/page";
import GetMovieTest from "./MovieTest";
export default function GetMovieLists() {
  return (
    <>
      <div className="     min-h-screen      ">
        <MovieData />
      </div>
    </>
  );
}
