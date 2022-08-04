import { useRouter } from 'next/router'
import React from 'react'
import ButtonComponent from '../button'
import { FormComponent, InputFormComponent, LabelFormComponent } from '../form'

export default function TransferComponent() {
  return (
    <div className='mt-24'>
        <FormComponent title='Transfer'
        childrenC={
            <>
                <LabelFormComponent title='Transfer To' />
                <InputFormComponent type='number' placeHolder='Enter Account Number' />
                <InputFormComponent class='peer hidden' id='merchant' type='checkbox' />
                <LabelFormComponent class='border cursor-pointer peer-checked:bg-slate-700 peer-checked:text-white ease-in-out duration-300 mr-3 px-3 py-3' htmlFor='merchant' title='This is Merchant'/>
                <LabelFormComponent title='Amount Transfer' />
                <InputFormComponent type='number' placeHolder='Enter Amount Transfer' />
                <LabelFormComponent title='Message' />
                <InputFormComponent type='text' placeHolder='For Buy Lunch' />
                <LabelFormComponent title='Account Number PIN' />
                <InputFormComponent type='text' placeHolder='Enter PIN' />
            </>
        }
        childrenButton={
            <div className='mx-auto w-80'>
                <ButtonComponent title='Send' />
                <ButtonComponent title='Back' link={{url:'/dashboard', newtab:false}} />
            </div>
            
        }
        />
    </div>
  )
}
