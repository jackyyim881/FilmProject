import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <h1>Homepage</h1>
      <Link href="/about">About</Link>
      <Link href="/article"> Article</Link>
      <Link href="/preferential">Preferential</Link>
    </nav>
  );
}
