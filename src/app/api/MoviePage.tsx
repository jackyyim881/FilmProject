"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import Link from "next/link";

type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  vote_average: number;
  overview: string;
};

type ResultsProps = {
  title: string;
  id: number;
  poster_path: string;
  results: MovieProps[];
};

export default function MovieData({
  currentPageIndex,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  movieRes: ResultsProps;
  currentPageIndex: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<ResultsProps | null>(null);

  useEffect(() => {
    const getMovieData = async () => {
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
      const data: ResultsProps = await movieRes.json();
      setData(data);
    };

    getMovieData();
  }, [currentPage]);
  if (!data) {
    return <div className=" w-96 h-10 text-black bg-zinc-200">Loading...</div>;
  }
  return (
    <>
      <div className=" ">
        <ScrollArea>
          <div className="flex min-h-full   space-x-4 pb-4 ">
            {data.results?.map((movie: MovieProps) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                variant="ghost"
                className="  w-2/4 h-[450px]  flex  flex-col justify-start font-normal   "
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className=" max-w-[200px] mx-auto   object-cover transition-all hover:scale-105"
                  width={300}
                  height={200}
                />
                <div className="m-4  flex flex-col items-center">
                  <CardTitle className="text-sm">{movie.title}</CardTitle>
                  <div>{movie.original_language}</div>
                  <div>{movie.vote_average}</div>
                  <div className="flex">
                    {Array(Math.floor(movie.vote_average)).fill(<AiFillStar />)}
                    {movie.vote_average % 1 >= 0.4 && <BsStarHalf />}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <Separator className=" " />
      <div className=" space-x-4 flex justify-center items-center">
        <Button onClick={() => setCurrentPage((page) => page + 1)}>
          Next Page
        </Button>
        <div>{currentPage}</div>
        <Button onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}>
          Previous Page
        </Button>
      </div>
    </>
  );
}
