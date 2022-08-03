import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import ButtonComponent from '../button'

export default function PortalComponent() {
    const router = useRouter()

    const onDirect = (path:string) =>{
        router.push(path)
    }
  return (
    <div className=' text-slate-700 text-center'>
        <div className='mx-auto w-96 mt-96'>
            <h1 className='font-bold text-3xl'>Welcome</h1>
            <h1 className='font-bold text-3xl'>Simple Bank App v2</h1>
        </div>
        <div className='my-10 mx-auto flex flex-col text-center w-96 border'>
            <ButtonComponent function={() => onDirect("/login")} title='Log In'/>
            <ButtonComponent function={() => onDirect("/register")} title='Register'/>
        </div>
    </div>
  )
}
