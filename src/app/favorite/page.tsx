"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { connection } from "../db/db";
import { LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

type MovieProps = {
  movieResJsonData: any | string;
  title: string;
  id: number | any;
  poster_path: string;
  original_language: string;
  vote_average: number;
  overview: string;
  vote_count: number;
  movie?: any; // added initializer for movie property
};

const CustomTooltip = (props: any) => {
  const { movie } = props;
  if (movie) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {movie.title}
            </div>
            <div className="text-sm text-gray-500">{movie.overview}</div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

async function getMovieData(page: MovieProps) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=2023&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const movieResJson = await movieRes.json();
  const movie = movieResJson.results;
  return {
    props: { movie },
  };
}
export default async function page({ movie }: MovieProps | any) {
  const props = { movie };
  const dataFilm = await getMovieData(movie);
  const movieData = dataFilm.props.movie;
  const regex = /:\s+.+/;
  const movieDataForBarCharts = movieData.map((movie: any) => ({
    name: movie.title,
    total: movie.vote_count,
    vote: movie.vote_average,
  }));
  const shortName = movieDataForBarCharts.map((movie: any) => {
    const name = movie.name;
    const total = movie.total;
    const vote = movie.vote;
    const shortName = name.replace(regex, "");
    const filmDataList = {
      shortName,
      total,
      vote,
    };

    return filmDataList;
  });
  const movieDataForBarChartWithShortName = movieDataForBarCharts.map(
    (movie: any, index: number) => ({
      Name: shortName[index].shortName,
      total: movie.total,
      vote: movie.vote,
    })
  );
  console.log(movieDataForBarChartWithShortName);

  const movieDataForBarChart = movieDataForBarChartWithShortName.map(
    (movie: any) => ({
      name: movie.Name,
      total: movie.total,
      vote: movie.vote,
    })
  );

  //please combined the shortName of const into movieDataForBarChart in order to display the shortName in the bar chart

  return (
    <>
      <ResponsiveContainer width={2500} height={700} className={"m-10"}>
        <BarChart data={movieDataForBarChart}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            padding={{ left: 10 }}
            stroke="#FFFFFF"
            fontSize={10}
            className=""
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="yellow"
            fontSize={12}
            tickCount={10}
            tickFormatter={(value) => `${value}`}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="total"
            barSize={50}
            label={{ position: "top" }}
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
          />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <Button onClick>Hello</Button>
      </div>
    </>
  );
}

{
  /* <div>
  {data.props.movie.map((movie: MovieProps) => (
    <ul key={data.props.movie}>
      <div className="p-6 w-[200px] bg-white text-black">
        <li>{movie.title}</li>
        <li>{movie.overview}</li>
        <li>{movie.vote_average}</li>
        <li>{movie.vote_count}</li>
      </div>
    </ul>
  ))}
</div> */
}
