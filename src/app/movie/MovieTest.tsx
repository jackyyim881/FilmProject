import { use } from "react";

async function getMovieData() {
  return (
    await fetch("http://localhost:3000/api/test", {
      method: "GET",
      cache: "no-cache",
    })
  ).json();
}

export default function GetMovieTest() {
  const movieData = use(getMovieData());

  return (
    <>
      <main className="min-h-screen">
        <h1>MovieTest</h1>
        <div>{JSON.stringify(movieData)}</div>
      </main>
    </>
  );
}
