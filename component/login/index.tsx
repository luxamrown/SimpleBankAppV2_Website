import React from 'react'
import ButtonComponent from '../button'
import { FormComponent, InputFormComponent, LabelFormComponent } from '../form'

export default function LoginComponent() {
  return (
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
            <ButtonComponent title='Log In' />
        }
        />
  )
}
