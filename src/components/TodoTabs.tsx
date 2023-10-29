import  {  useState } from "react";
import CreateTodo from "../modules/create-todo/CreateTodo";
import ListTodo from "@/modules/list-todo/ListTodo";
import TodoCompleted from "@/modules/todo-completed/TodoCompleted";

interface TabItem {
  index: number;
  label: string;
  children: React.JSX.Element;
}

const TodoTabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const TAB_LIST: TabItem[] = [
    {
      index: 0,
      label: "Crear Tarea",
      children: <CreateTodo />,
    },
    {
      index: 1,
      label: "Lista de Tareas",
      children: <ListTodo />,
    },
    {
      index: 2,
      label: "Tareas Completadas",
      children: <TodoCompleted />,
    },
  ];

  return (
    <>
      <nav className="tab_container">
        {TAB_LIST.map((tab) => (
          <li
            className={
              currentTab === tab.index ? "tab_item tab_current" : "tab_item"
            }
            key={tab.index}
            onClick={() => setCurrentTab(tab.index)}
          >
            {tab.label}
          </li>
        ))}
      </nav>

      {TAB_LIST[currentTab].children}
    </>
  );
};

export default TodoTabs;
