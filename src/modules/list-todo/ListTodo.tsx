import { useQuery } from "@tanstack/react-query";
import { TodoProps } from "../../components/Todo";
import TodoWithCheckbox from "./TodoWithCheckbox";
import { http } from "@/utils";

const ListTodo = () => {
  const { data:response } = useQuery({
    queryKey: ["listTodos"],
    queryFn: () => {
      return http.get<TodoProps[]>("/to-do/pending")
    },
  });
  return (
    <section className="flex flex-col gap-4 mt-4">
      {response?.data.map((td) => (
        <TodoWithCheckbox {...td} key={td.id} />
      ))}
    </section>
  );
};

export default ListTodo;
