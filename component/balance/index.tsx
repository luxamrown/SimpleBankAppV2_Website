import { url } from 'inspector'
import { useRouter } from 'next/router'
import React from 'react'
import ButtonComponent from '../button'

export default function BalanceComponent() {
    const router = useRouter()

  return (
    <div className='border mt-56 mx-auto w-96 text-center'>
        <div className='my-10'>
            <h1 className='font-bold text-2xl'>Balance Info</h1>
        </div>
        <div className='my-14 text-lg'>
            <h1>Account Number: 123134</h1>
            <h1>Your Balance :</h1>
            <h1>Rp 20.000.000,-</h1>
        </div>
        <div className='mx-auto w-56'>
            <ButtonComponent title='Back' link={{url:'/dashboard', newtab:false}}/>
        </div>
    </div>
  )
}
