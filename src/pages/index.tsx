import TodoHeader from "@/components/TodoHeader";
import TodoTabs from "@/components/TodoTabs";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function Home() {
  return (
    <main className={`${jost.className} my-12 mx-8`}>
      <TodoHeader/>
      <TodoTabs />
    </main>
  );
}
