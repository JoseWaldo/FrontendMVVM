//rafce
import { http } from "@/utils";
import { useMutation } from "@tanstack/react-query";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TodoProps } from "../../components/Todo";

const CreateTodo = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [messageError, setMessageError] = useState<string>();
  const [messageSuccesfully, setMessageSuccesfully] = useState<string>();

  const { mutate: createTodoMutation } = useMutation({
    mutationFn: async (todo: Omit<TodoProps, "id">) => {
      return http.post("/to-do", todo);
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageError(undefined);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messageError]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageSuccesfully(undefined);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messageSuccesfully]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { target } = event;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, date } = values;
    if (title.length === 0 || description.length === 0 || date.length === 0) {
      setMessageError("Todos los campos son obligatorios");
      return;
    }
    createTodoMutation({
        name: title,
        description,
        date: new Date(date).toISOString(),
        status: false
    });
    setValues({
      title: "",
      description: "",
      date: "",
    })
    setMessageSuccesfully("La tarea ha sido creada con exito")
  };

  return (
    <form method="POST" className="form" onSubmit={(e) => handleSubmit(e)}>
       {messageSuccesfully && <h2 className="text-green-800 text-[1.5rem]">{messageSuccesfully}</h2>}
      <label htmlFor="title">
        Título
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={values.title}
        />
      </label>
      <label htmlFor="description">
        Descripción
        <textarea
          className="input"
          name="description"
          id="description"
          onChange={handleChange}
          value={values.description}
        />
      </label>
      <label htmlFor="date">
        Fecha
        <input
          className="input"
          type="datetime-local"
          name="date"
          id="date"
          onChange={handleChange}
          value={values.date}
        />
      </label>
      {messageError && <p className="text-red-500 text-xs">{messageError}</p>}
      <button className="button">Añadir Tarea</button>
    </form>
  );
};

export default CreateTodo;
