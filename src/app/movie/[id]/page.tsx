import { Link } from "lucide-react";

type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  vote_average: number;
  overview: string;
  budget: number;
  homepage: string;
  movie: any;
  popularity: number;
};

async function fetchMovie(id: MovieProps) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  console.log("Fetching blog post with id: ", id);

  return movieRes.json();
}

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

export default async function MoviePageIndex({ params, searchParams }: any) {
  const { id } = params;
  const movie = await fetchMovie(id);
  console.log("Rerendering  Movie post with id: ", id);
  return (
    <>
      <div className="grid p-14">
        <div className="max-w-[600px]">
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
          <Link href={movie.homepage}>hello</Link>
          <div>{movie.popularity}</div>
        </div>
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
