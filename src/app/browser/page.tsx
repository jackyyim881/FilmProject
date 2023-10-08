import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import overView from "../favorite/overview";

type MovieProps = {
  name: string;
  id: number;
  poster_path: string;
  original_language: string;
  overview: string;
  title: string;
  popularity: number;
  release_date: string;
  profile_path: string;
  results: any;
  movieResJsonData: any;
};

type category = {
  value: string;
  category?: string;
};

type MovieTrendingProps = {
  movieTendingAll: {
    results: MovieProps[];
  };
};

const trending: category[] = [
  { value: "all" },
  { value: "movie" },
  { value: "tv" },
  { value: "person" },
];

// async function trendingMovie({ category }: category) {
//   const movieRes = await fetch(
//     `https://api.themoviedb.org/3/trending/${category}/day?language=en-US`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
//       },
//     }
//   );
//   return movieRes.json();
// }

async function trendingMovie({ category }: category) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/trending/${category}/day?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const movieResJson = await movieRes.json();
  const movieResJsonData = movieResJson.results;
  console.log("movieResJson", movieResJsonData);
  return {
    props: {
      movieResJsonData,
    },
  };
}
export default async function page({ movieResJsonData }: category | any) {
  const allCategory = trending.find((item) => item.value === "movie");
  const movieCategory = trending.find((item) => item.value === "tv");
  const personCategory = trending.find((item) => item.value === "person");
  const allMovie = [allCategory, movieCategory, personCategory];
  const movieTrending = await trendingMovie({
    value: "all",
    category: allMovie[0]?.value,
  });
  const trendingMoviesMovie = await trendingMovie({
    value: "all",
    category: allMovie[1]?.value,
  });

  const trendingMoviesPerson = await trendingMovie({
    value: "all",
    category: allMovie[2]?.value,
  });

  console.log(
    "Rerendering Movie post with id: ",
    movieTrending.props.movieResJsonData
  );
  return (
    <>
      <div className="m-10 ">
        <h1>Trending All Movie</h1>
        <div className="flex mt-20">
          {movieTrending.props.movieResJsonData.map((movie: MovieProps) => (
            <div className="flex " key={movie.id}>
              <div className="max-w-[600px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex mt-20">
          {movieTendingAll.results.map((movie: MovieProps) => (
            <div className="flex " key={movie.id}>
              <div className="max-w-[600px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div> */}
        <h1>Trending TV</h1>
        <div className="flex mt-20">
          {trendingMoviesMovie.props.movieResJsonData.map(
            (movie: MovieProps) => (
              <div className="flex " key={movie.id}>
                <div className="max-w-[600px] ">
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                      width={300}
                      height={200}
                    />
                  ) : (
                    <div>
                      <h1>Not Found</h1>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
        <h1>Trending People</h1>
        <div className="flex mt-20">
          {trendingMoviesPerson.props.movieResJsonData.map(
            (movie: MovieProps) => (
              <div className="flex " key={movie.id}>
                <div className="max-w-[600px] ">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                    alt={movie.title}
                    className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            )
          )}
        </div>
        {/* <div className="flex">
          {trendingMoviesMovie.results.map((movie: MovieProps) => (
            <div className="flex " key={movie.id}>
              <div className="max-w-[600px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
        <h1>Trending People</h1>

        <div className="flex">
          {trendingMoviesPerson.results.map((movie: MovieProps) => (
            <div className="flex  flex-col ml-10" key={movie.id}>
              <Card>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                  className="max-w-[200px] mx-auto object-cover transition-all hover:scale-105"
                  width={300}
                  height={200}
                  alt={movie.title}
                />
                <div>{movie.name}</div>
              </Card>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
