import React, { ReactNode } from 'react'
import ButtonComponent from '../button'

export function InputFormComponent(props:{type:string, placeHolder?:string, maxLength?:number, onChange?:()=>void, id?:string, name?:string, class?:string}) {
  return (
    <input name={props.name} id={props.id} onChange={props.onChange} maxLength={props.maxLength} type={props.type} className={'border outline-none my-2 py-2 px-3 ' + props.class} placeholder={props.placeHolder}/>
    )
}
export function LabelFormComponent(props:{title:string, htmlFor?:string, class?:string}) {
  return (
    <label htmlFor={props.htmlFor} className={'my-2 ' + props.class}>{props.title}</label>
    )
}

export function FormComponent(props:{title:string, childrenC:ReactNode, childrenButton:ReactNode}) {
  return (
    <div className='w-[30rem] mx-auto text-center'>
        <form className=' py-5 border'>
            <h1 className='font-bold text-xl my-5'>{props.title}</h1>
            <div className='flex flex-col mx-10'>
              {props.childrenC}
            </div>
            {props.childrenButton}
        </form>
    </div>
  )
}


