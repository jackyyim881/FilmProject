import { ScrollArea } from "@radix-ui/react-scroll-area";
import MovieData from "../api/page";
import { Post } from "../components/post";
import MovieList from "../MovieList";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonList from "./ButtonList";
import PaginationControls from "../components/PaginationControls";
import { ScrollBar } from "@/components/ui/scroll-area";

async function getMoviePosts({ params }: { params: string }) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${params}&primary_release_year=2023&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        caches: "force-cache",
      },
    }
  );

  console.log("Fetching movie posts");
  return movieRes.json();
}
export default async function GetMovieLists({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1"; // get the 'page' parameter from searchParams
  const per_page = searchParams["per_page"] ?? "20"; // get the 'per_page' parameter from searchParams

  const posts = await getMoviePosts({ params: page } as any);

  console.log(posts);
  return (
    <>
      <div className="  p-10    ">
        <MovieList />
        <div className=" flex space-x-4 pb-4">
          {posts.results?.map((movie: any) => (
            <Post key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

// const page = searchParams["page"] ?? "1";
// const per_page = searchParams["per_page"] ?? "5";

// const start = (Number(page) - 1) * Number(per_page);
// const end = start + Number(per_page);
