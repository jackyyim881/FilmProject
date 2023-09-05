"use client";
import { useRouter } from "next/navigation";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleReset = () => {
    router.push("/");
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => handleReset()}>Try again</button>
    </div>
  );
}
