"use client";
import { NextResponse } from "next/server";
import { useState } from "react";
type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  vote_average: number;
};

async function getStaticOverviewProps() {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const data: MovieProps = await movieRes.json();
  return NextResponse.json({
    data,
  });
}

export default function MoviePage() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  return (
    <div>
      <h1>Movie Page</h1>
      <p>
        {movies.map((movie) => `${movie.title} - ${movie.original_language}`)}
      </p>
    </div>
  );
}
