import ButtonComponent from '../button'
import { FormComponent, InputFormComponent, LabelFormComponent } from '../form'

export default function RegisterComponent() {
  return (
    <FormComponent title='Register Account'
      childrenC={
      <>
        <LabelFormComponent title='Username' />
        <InputFormComponent type='text' placeHolder='Enter Username' />
        <LabelFormComponent title='Password' />
        <InputFormComponent type='password' placeHolder='Enter Password' />
        <LabelFormComponent title='Account PIN' />
        <InputFormComponent type='password' maxLength={6} placeHolder='Enter 6 PIN' />
        <LabelFormComponent title='Balance'/>
        <div className='flex flex-row my-10'>
          <div> 
            <InputFormComponent class='peer hidden' name='selectbalance' id='balance5jt' type='radio' />
            <LabelFormComponent class='border cursor-pointer peer-checked:bg-slate-700 peer-checked:text-white ease-in-out duration-300 mr-3 px-3 py-3' htmlFor='balance5jt' title='Rp5.000.00,-'/>
          </div>
          <div>
            <InputFormComponent class='peer hidden' name='selectbalance' id='balance2jt' type='radio' />
            <LabelFormComponent class='border cursor-pointer peer-checked:bg-slate-700 peer-checked:text-white ease-in-out duration-300 mr-3 px-3 py-3' htmlFor='balance2jt' title='Rp2.000.00,-'/>
          </div>
          <div>
            <InputFormComponent class='peer hidden' name='selectbalance' id='balance9jt' type='radio' />
            <LabelFormComponent class='border cursor-pointer peer-checked:bg-slate-700 peer-checked:text-white ease-in-out duration-300 mr-3 px-3 py-3' htmlFor='balance9jt' title='Rp9.000.00,-'/>
          </div>
        </div>
      </>}
      childrenButton={
        <>
          <ButtonComponent title='Register' />
        </> 
      }
    />

  )
}
