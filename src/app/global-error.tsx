"use client";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const handleReset = () => {
    reset();
    // navigate to a specific page after reset
    router.push("/");
  };

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => handleReset()}>Try again</button>
      </body>
    </html>
  );
}
