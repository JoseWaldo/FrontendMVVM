import { useQuery } from "@tanstack/react-query";
import Todo, { TodoProps } from "@/components/Todo";
import { http } from "@/utils";

const TodoCompleted = () => {
  const { data: response } = useQuery({
    queryKey: ["listTodos"],
    queryFn: () => {
      return http.get<TodoProps[]>("/to-do/completed");
    },
  });
  return (
    <section className="flex flex-col gap-4 mt-4">
      {response?.data.map((td) => (
        <Todo {...td} key={td.id} />
      ))}
    </section>
  );
};

export default TodoCompleted;
