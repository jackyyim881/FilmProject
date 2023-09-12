import Image from "../../../node_modules/next/image";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MovieData from "./MoviePage";
import GetMovieTest from "../movie/MovieTest";
type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  vote_average: number;
};

type ResultsProps = {
  title: string;
  id: number;
  poster_path: string;
  results: MovieProps[];
};

export default function Page() {
  return (
    <>
      <div className="container relative p-6">
        <MovieData currentPageIndex={1} />
      </div>
    </>
  );
}
