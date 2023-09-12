import { useRouter } from "next/navigation";
import Link from "next/link";
import { NextResponse } from "next/server";
import { useState } from "react";
import { ReactNode } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import getMovieIndex from "@/lib/getMovie";
import GetMovieIndex from "@/lib/getMovie";

// async function getServerSideProps(): Promise<{ props: MovieProps }> {
//   const movieRes = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
//       },
//     }
//   );
//   const movie = await movieRes.json();
//   console.log(movie);
//   return {
//     props: movie,
//   };
// }

// export const getServerSideProps = async (params: MovieProps) => {
//   const { id } = params;
//   const movieRes = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
//       },
//     }
//   );
//   const movie = await movieRes.json();
//   console.log(movie);
//   return {
//     props: { params, movie },
//   };
// };

export default function MoviePageIndex({
  movie,
  params,
}: InferGetServerSidePropsType<typeof GetMovieIndex>) {
  // const data = GetMovieIndex(params);

  return (
    <>
      <div>
        <div className="container relative p-6">{params.id}</div>
      </div>
    </>
  );
}

// <PageWrapper>
//   {data_movie.props.data.results?.map((movie: MovieProps) => (
//     <div key={params.id} className=" mt-10">
//       <Link href={`/movie/name/${movie.title}`}>
//         <div className=" p-6 w-[200px] bg-white text-black">
//           {movie.title}
//         </div>
//       </Link>
//       <div>{movie.overview}</div>
//     </div>
//   ))}
// </PageWrapper>

// type MovieProps = {
//   id: string;
//   title: string;
//   poster_path: string;
//   original_language: string;
//   vote_average: number;
//   overview: string;
//   budget: number;
//   homepage: string;
//   movie: any;
// };

// async function getStaticProps({ params }: MovieProps) {
//   const movieId = params.id;
//   const movieRes = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
//       },
//     }
//   );
//   const movie = await movieRes.json();
//   console.log(movie);
//   return {
//     props: { movie, params },
//   };
// }
