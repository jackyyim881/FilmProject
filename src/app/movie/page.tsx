import React from "react";
import MovieData from "../api/page";
import GetMovieTest from "./MovieTest";
import MovieList from "../MovieList";
export default function GetMovieLists() {
  return (
    <>
      <div className="     min-h-screen  p-10    ">
        <MovieList />
        <MovieData />
      </div>
    </>
  );
}
