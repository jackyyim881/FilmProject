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

export default function MovieList(value: string) {
  return (
    <>
      <Tabs defaultValue="account" className="max-w-[400px]">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="Movie">Movie</TabsTrigger>
          <TabsTrigger value="Article">Article</TabsTrigger>
          <TabsTrigger value="Preferential">Preferential</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
