export default function ButtonComponent(props:{title:string, function?:() =>void}) {
  return (
    <button onClick={props.function} className='border m-4 border-gray-400 hover:bg-slate-700 hover:text-white ease-in-out duration-200 px-20 py-3'>{props.title}</button>
  )
}
