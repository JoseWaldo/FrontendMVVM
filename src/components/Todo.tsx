export interface TodoProps {
  id: number;
  name: string;
  description: string;
  date: string;
  status: boolean;
}
const DATE_OPTIONS:Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
};

const Todo = ({ name, description, date }: TodoProps) => {
  const dateRender = date
    ? new Date(date).toLocaleDateString(undefined, DATE_OPTIONS)
    : "";
  return (
    <article className="flex flex-col gap-1">
      <h4 className="font-semibold text-dark-grey text-sm">{name}</h4>
      <p className="font-medium text-xs">{description}</p>
      <p className="font-semibold text-[0.625rem]">{dateRender}</p>
    </article>
  );
};

export default Todo;
