import React from "react";

type category = {
  category: string;
};
const trending = [
  { value: "all" },
  { value: "movie" },
  { value: "tv" },
  { value: "person" },
];

async function trendingMovie({ category }: category) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/trending/${category}/day?language=en-US`
  );
  return movieRes.json();
}
export default async function page({ params }: any) {
  const movieTranding = await trendingMovie({ category: "movie" });

  console.log("Rerendering  Movie post with id: ", movieTranding);
  return (
    <div>
      {movieTranding.results?.map((movie: any) => (
        <div key={movie.id} className=" mt-10">
          <div className=" p-6 w-[200px] bg-white text-black">
            {movie.title}
          </div>
          <div>{movie.overview}</div>
        </div>
      ))}
    </div>
  );
}
