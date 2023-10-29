import Todo, { TodoProps } from "@/components/Todo";
import { http } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoWithCheckbox = (props: TodoProps) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTodo, isPending } = useMutation({
    mutationFn: async () => {
      return http.delete(`/to-do/${props.id}`);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["listTodos"],
      });
    },
  });
  const { mutate: checkTodo } = useMutation({
    mutationFn: async () => {
      return http.put(`/to-do`, {
        ...props,
        status: true,
      });
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["listTodos"],
      });
    },
  });

  const onChangeTodo: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      checkTodo();
    }
  };
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={`todo-${props.id}`}
        className="mb-auto mt-1"
        onChange={onChangeTodo}
      />
      <Todo
        id={props.id}
        date={props.date}
        description={props.description}
        name={props.name}
        status={props.status}
      />
      <button
        className="bg-red-500 text-white 
      rounded-md p-2 
      ml-auto
      h-min"
        disabled={isPending}
        onClick={() => deleteTodo()}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TodoWithCheckbox;
