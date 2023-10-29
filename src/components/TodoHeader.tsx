
const Line = ()=>{
    return <div className='h-[1px]  w-full bg-light-grey'></div>
}

const TodoHeader = () => {
  return (
    <header className='flex max-w-md items-center'>
        <Line/>
        <h2 className='whitespace-nowrap px-2 text-2xl '><b className='mr-2'>Todo</b>List</h2>
        <Line/>
    </header>
  )
}

export default TodoHeader

