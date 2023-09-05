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

// export default async function getMovieData({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const movie_item = searchParams["page"] ?? "1 ";
//   const movieRes = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
//       },
//       next: { revalidate: 10 },
//     }
//   );
//   const data: ResultsProps = await movieRes.json();
//   return (
//     <>
//       <div className="container relative p-6">
//         <ScrollArea>
//           <div className="flex h-1/2  w-[1400px] container space-x-4 pb-4 ">
//             {data.results?.map((movie: MovieProps) => (
//               <Button
//                 key={movie.id}
//                 variant="ghost"
//                 className="  w-2/4 h-[450px]  flex  flex-col justify-start font-normal   "
//               >
//                 <Image
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className=" max-w-[200px] mx-auto   object-cover transition-all hover:scale-105"
//                   width={300}
//                   height={200}
//                 />
//                 <div className="m-4 flex flex-col items-center">
//                   <CardTitle>{movie.title}</CardTitle>
//                   <div>{movie.original_language}</div>
//                   <div>{movie.vote_average}</div>
//                   <div className="flex">
//                     {Array(Math.floor(movie.vote_average)).fill(<AiFillStar />)}
//                     {movie.vote_average % 1 >= 0.4 && <BsStarHalf />}
//                   </div>
//                 </div>
//               </Button>
//             ))}
//           </div>
//           <ScrollBar orientation="horizontal" />
//         </ScrollArea>
//       </div>
//     </>
//   );
// }
export default function Page() {
  return (
    <>
      <div className="container relative p-6">
        {/* <MovieData /> */}
        <MovieData />
      </div>
    </>
  );
}
