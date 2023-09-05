"use client";
export async function getData({ params }: { params: any }) {
  const MovieData = await fetch("http://localhost:3000/api/test", {
    method: "GET",
  });
  const data = await MovieData.json();

  return (
    <>
      <div>
        <h1>Movie Page</h1>
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}

export default function GetMovieTest() {
  const movieData = getData({ params: { id: 1 } });
  return (
    <>
      <div className="min-h-screen">
        <h1>MovieTest</h1>
        <div>{movieData}</div>
      </div>
    </>
  );
}
