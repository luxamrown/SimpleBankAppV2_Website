import Link from "next/link"

export default function ButtonComponent(props:{title:string, hoverColor?:string,function?:() =>void, link?:{url:string, newtab?:boolean}}) {
  if (!props.hoverColor){
    if(!props.link){
      return (
        <button onClick={props.function} className={'border my-4 w-full border-gray-400 hover:bg-gray-400 hover:text-white ease-in-out duration-200 py-3'}>{props.title}</button>
      )
    }
    return (
        <Link href={props.link.url} passHref>
          <a className="" target={!props.link.newtab?"_self":"_blank"} rel='noreferrer'>
              <button onClick={props.function} className={'border my-4 w-full border-gray-400 hover:bg-gray-400 hover:text-white ease-in-out duration-200 py-3'}>{props.title}</button>
          </a>
        </Link>
    )
  }
  if(!props.link){
    return (
      <button onClick={props.function} className={'border my-4 w-full border-gray-400 ease-in-out duration-200  py-3 ' + props.hoverColor}>{props.title}</button>
    )
  }
  return (
    <Link href={props.link.url} passHref >
      <a className="" target={!props.link.newtab?"_self":"_blank"} rel='noreferrer'>
        <button onClick={props.function} className={'border my-4 w-full border-gray-400 ease-in-out duration-200 py-3 ' + props.hoverColor}>{props.title}</button>
      </a>
    </Link>
  )
}
