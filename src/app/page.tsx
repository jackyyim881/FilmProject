import PaginationControls from "./components/PaginationControls";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MovieList from "./MovieList";
import MovieHome from "./movie/page";
import GetMovieLists from "./movie/page";
import { Suspense, useState } from "react";

const data = [];
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...
  return (
    <>
      <div className=" flex  container justify-between flex-col         p-10">
        <GetMovieLists searchParams={searchParams} />
        <div className="">
          <PaginationControls hasNextPage={end > 0} hasPrevPage={start > 0} />
        </div>
      </div>
    </>
  );
}
