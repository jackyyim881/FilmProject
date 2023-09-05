import { useRouter } from "next/router";
import Link from "next/link";
import { NextResponse } from "next/server";

export default async function generateMetaData({
  params,
  data,
}: {
  params: { id: string };
  data: any;
}) {
  return (
    <>
      <div>Movie {params.id}</div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div></div>
    </>
  );
}

async function getStaticOverviewProps({ currentPage }: any) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await movieRes.json();
  return NextResponse.json({
    data,
  });
}
