import Link from 'next/link'
import React from 'react'
import ButtonComponent from '../button'

export default function DashboardComponent() {
  const handleLogout = () =>{
    window.sessionStorage.clear()
  }

  const DashboardButton = (props:{href:string, name:string}) => {
    return(
      <Link href={props.href}>
      <div className='border-2 w-96 mt-5 mx-auto text-center flex flex-row cursor-pointer shadow-md hover:shadow-none ease-in-out duration-300 '>
            <h1 className='text-2xl mx-auto font-medium my-5'>{props.name}</h1>
      </div>
    </Link>
    )
  }

  return (
    <div className='text-center mt-52 border mx-auto w-[30rem] h-[30rem]'>
      <div className='my-10 '>
        <h1>Logged as</h1>
      </div>
      <DashboardButton href='/transfer' name='Transfer' />
      <DashboardButton href='/balance' name='Balance Info' />
      <DashboardButton href='/transaction-history' name='Transaction History' />
      <div className='mx-auto w-56'>
        <ButtonComponent title='Log Out' function={handleLogout} link={{url:"/", newtab:false}} hoverColor='bg-red-500 hover:bg-red-400 text-white'/>
      </div>
    </div>
    )
}
