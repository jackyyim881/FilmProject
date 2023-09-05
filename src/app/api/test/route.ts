// export async function GET(request: Request, response: Response, params: any) {
// }
import { NextResponse, NextRequest } from "next/server";
import { useState } from "react";
export async function GET({ params }: { params: any }) {
  const getMovieData = async ({ currentPage }: any) => {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&primary_release_year=2023&sort_by=popularity.desc`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        },
      }
    );
    const movie = await movieRes.json();
    return {
      movie,
    };
  };
  return NextResponse.json(await getMovieData({ currentPage: 1 }));
}
