"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function MovieList() {
  const tabs = [
    { value: "Movie", route: "/movie" },
    { value: "Article", route: "/article" },
    { value: "Preferential", route: "/preferential" },
  ];
  const router = useRouter();
  return (
    <>
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-[300px] relative grid-cols-3 ">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => router.push(tab.route)}
            >
              {tab.value}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
}
