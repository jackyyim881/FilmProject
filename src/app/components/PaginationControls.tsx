"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const per_page = searchParams.get("per_page") ?? "20";

  const page_item = Number(per_page);
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${page_item - 20}`);
        }}
      >
        prev page
      </Button>

      <CardDescription className="">{page}</CardDescription>

      <Button
        className=""
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${page_item + 20}`);
        }}
      >
        next page
      </Button>
    </div>
  );
};

export default PaginationControls;
