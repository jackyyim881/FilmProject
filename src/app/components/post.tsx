"use client";

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ScrollArea, Scrollbar } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
export function Post(props: any) {
  const { movie } = props;
  return (
    <div className=" ">
      <ScrollArea>
        <div className=" min-h-full flex   space-x-4 pb-4 ">
          <Link
            href={`/movie/${movie.id}`}
            variant="ghost"
            className="h-[450px]     justify-start font-normal"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className=" max-w-[200px] mx-auto   object-cover transition-all hover:scale-105"
              width={300}
              height={200}
            />
            <CardTitle className="text-sm  w-full">{movie.title}</CardTitle>
            <div className="flex">
              {Array(Math.floor(movie.vote_average)).fill(<AiFillStar />)}
              {movie.vote_average % 1 >= 0.4 && <BsStarHalf />}
            </div>
          </Link>
        </div>
        <Scrollbar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
