import React from "react";
import Link from "next/link";
import { NextResponse } from "next/server";
type PageWrapperProps = {
  children: React.ReactNode;
};
type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  vote_average: number;
  overview: string;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return <main>{children}</main>;
}
