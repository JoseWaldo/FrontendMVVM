import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function Home() {
  return (
    <main className={jost.className}>
      <h1>TodoApp</h1>
    </main>
  );
}
