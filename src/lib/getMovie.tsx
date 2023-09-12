type MovieProps = {
  id: string;
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  overview: string;
  budget: number;
  homepage: string;
  movie: any;
};

async function getStaticProps({ params }: any) {
  const movieId = params.id;
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const movie = await movieRes.json();
  console.log(movie);
  return {
    props: { movie, params },
  };
}

export default function MovieIndex({
  movie,
  params,
}: {
  movie: any;
  params: any;
}) {
  const data = getStaticProps(params);
  console.log(data);
  return (
    <>
      <div className="container relative p-6">{params.id}</div>
    </>
  );
}
