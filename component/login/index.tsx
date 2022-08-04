import React from 'react'
import ButtonComponent from '../button'
import { FormComponent, InputFormComponent, LabelFormComponent } from '../form'

export default function LoginComponent() {
  return (
    <div className='mt-52'>        
        <FormComponent 
        title='Log In'
        childrenC={
            <>
                <LabelFormComponent title='Username' />
                <InputFormComponent type='text' placeHolder='Enter Username' />
                <LabelFormComponent title='Password' />
                <InputFormComponent type='password' placeHolder='Enter Password' />
            </>
        }
        childrenButton={
          <div className='mx-auto w-56'>
            <ButtonComponent title='Log In' />
          </div>


        }
        />
    </div>
  )
}
